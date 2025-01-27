import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_STOCK_ENTRY,
  GET_MY_PORTFOLIO,
} from "../../graphql/operations/query/user";
import ErrorDisplay from "../common/ErrorDisplay";
import Loader from "../common/loader";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MyUserContext } from "../../context/UserContext";
import { CREATE_PORTFOLIO } from "../../graphql/operations/mutation/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface PortfolioProps {
  handleModal: () => void;
  price: number;
  ticker: string;
}

type Stock = {
  name: string;
  ticker: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
  totalValue: number;
  purchaseDate: string;
  portfolioId: string;
};

type Portfolio = {
  name: string;
  description: string;
  totalInvestment: number;
  userId: string;
};

const Portfolio = ({ handleModal, price, ticker }: PortfolioProps) => {
  const userContext = useContext(MyUserContext);
  const { user } = userContext;
  const initialState: Stock = {
    name: ticker,
    ticker,
    currentPrice: price,
    portfolioId: "",
    quantity: 0,
    purchaseDate: new Date().toISOString(),
    purchasePrice: 0,
    totalValue: 0,
  };
  const initialPortfolio: Portfolio = {
    name: "",
    description: "",
    totalInvestment: 0,
    userId: "",
  };
  const { data, error, loading } = useQuery(GET_MY_PORTFOLIO);
  const [selected, setSelected] = useState("");
  const [insertStock, setInsertStock] = useState<Stock>(initialState);
  const [portfolioId, setPortfolioId] = useState("");
  const [portfolio, setPortfolio] = useState<Portfolio>(initialPortfolio);
  const [createPortfolio] = useMutation(CREATE_PORTFOLIO);
  const [createStockEntry] = useMutation(CREATE_STOCK_ENTRY);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("runing");
    if (selected && selected !== "") {
      console.log("------");
      const myPortfolio = portfolios?.find(
        (portfolio) => portfolio?.name === selected
      );
      setPortfolioId(myPortfolio?.id || "");
    }
  }, [selected]);

  if (error) {
    <ErrorDisplay error={JSON.stringify(error)} />;
  }
  if (loading) {
    return <Loader />;
  }
  const portfolios = data?.getMyPortfolio?.data || [];
  const portfolioList = portfolios?.map((portfolio) => portfolio?.name);

  const handleAdd = () => {
    console.log(portfolioId);
    if (!portfolioId) {
      return toast.error("No portfolio selected!");
    }
    const newAdd: Stock = {
      ...insertStock,
      totalValue: insertStock?.quantity * insertStock?.purchasePrice,
      portfolioId,
    };
    createStockEntry({
      variables: {
        input: newAdd,
      },
      onCompleted: (data) => {
        if (!data?.createStockEntry?.success) {
          return toast.error(data?.createStockEntry?.message);
        }
        toast.success(data?.createStockEntry?.message);
        setInsertStock(initialState);
        return navigate("/dashboard");
      },
    });
  };

  const handleCreatePortfolio = () => {
    if (!user) {
      <div className="z-50">
        <ErrorDisplay error="You must be logged in to perform this action!" />
      </div>;
    }
    const newPortfolio: Portfolio = {
      ...portfolio,
      userId: user?.id || "",
    };
    createPortfolio({
      variables: {
        input: newPortfolio,
      },
      onCompleted: (data) => {
        if (!data?.createPortfolio?.success) {
          return toast.error(data?.createPortfolio?.message);
        }
        setPortfolio(initialPortfolio);
        toast.success(data?.createPortfolio?.message);
        return navigate("/portfolios");
      },
    });
  };

  const portfolioPage = () => (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <h1 className="font-bold text-xl">Add UPLD to your portfolio</h1>
      </div>
      <div className="flex flex-col ">
        <label>Select Portfolio</label>
        <select
          name="portfolio"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="my-4 px-4 py-2 text-xl font-bold dark:bg-slate-800"
        >
          <option value="" disabled className="dark:bg-slate-800">
            {selected ? selected : "Select a Portfolio"}
          </option>
          {portfolioList?.map((item, idx) => (
            <option value={item} key={idx} className="dark:bg-slate-800">
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        <div className="flex flex-col">
          <label>Stock Symbol</label>
          <input
            className="rounded-sm dark:bg-slate-800 p-2"
            disabled
            value={insertStock?.ticker}
          />
        </div>
        <div className="flex flex-col">
          <label>Quantity</label>
          <input
            className="rounded-sm dark:bg-slate-800 p-2"
            onChange={(e) =>
              setInsertStock({
                ...insertStock,
                quantity: parseFloat(e.target.value),
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Purchase Price</label>
          <input
            className="rounded-sm dark:bg-slate-800 p-2"
            value={insertStock?.purchasePrice}
            name="purchasePrice"
            onChange={(e) =>
              setInsertStock({
                ...insertStock,
                purchasePrice: parseFloat(e.target.value),
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Current Price</label>
          <input
            className="rounded-sm dark:bg-slate-800 p-2"
            disabled
            value={insertStock?.currentPrice}
          />
        </div>
        <div className="flex flex-col">
          <label>Purchase Date</label>
          <input
            className="rounded-sm dark:bg-slate-800 p-2"
            value={insertStock?.purchaseDate}
            disabled
          />
        </div>
        <div className="py-4 flex justify-end">
          <Button onClick={handleAdd}>Add</Button>
        </div>
      </div>
    </div>
  );

  const createPage = () => (
    <div className=" flex flex-col">
      <div className="flex justify-center">
        <h4 className="font-bold  text-2xl">Create Portfolio</h4>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label>Portfolio Name</label>
          <input
            className="rounded-sm dark:bg-slate-800 p-2"
            value={portfolio?.name}
            onChange={(e) =>
              setPortfolio({
                ...portfolio,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Portfolio Description</label>
          <textarea
            className="rounded-sm dark:bg-slate-800 p-2"
            value={portfolio?.description}
            onChange={(e) =>
              setPortfolio({
                ...portfolio,
                description: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Portfolio Total Investment</label>
          <input
            className="rounded-sm dark:bg-slate-800 p-2"
            value={portfolio?.totalInvestment}
            onChange={(e) =>
              setPortfolio({
                ...portfolio,
                totalInvestment: parseFloat(e.target.value),
              })
            }
          />
        </div>
        <div className="flex justify-end m-4">
          <Button onClick={handleCreatePortfolio}>Create Portfolio</Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="absolute border-2 border-red-700 w-full h-full flex justify-center items-center rounded-xl shadow-xl p-4 dark:bg-slate-600 bg-slate-300 z-40">
      <div className="w-[600px] bg-slate-100 dark:bg-slate-900 z-50 p-4">
        <div className="flex justify-end">
          <button onClick={handleModal}>
            <IoIosCloseCircleOutline
              size={38}
              className="text-red-400 hover:text-red-800 font-bold"
            />
          </button>
        </div>
        {portfolios?.length === 0 ? createPage() : portfolioPage()}
      </div>
    </div>
  );
};

export default Portfolio;
