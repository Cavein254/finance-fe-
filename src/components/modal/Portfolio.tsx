import { useQuery } from "@apollo/client";
import { GET_MY_PORTFOLIO } from "../../graphql/operations/query/user";
import ErrorDisplay from "../common/ErrorDisplay";
import Loader from "../common/loader";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";

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

const CreatePortfolio = () => {};

const Portfolio = ({ handleModal, price, ticker }: PortfolioProps) => {
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
  const { data, error, loading } = useQuery(GET_MY_PORTFOLIO);
  const [selected, setSelected] = useState("");
  const [insertStock, setInsertStock] = useState<Stock>(initialState);
  const [porfolioId, setPortfolioId] = useState("");
  if (error) {
    <ErrorDisplay error={JSON.stringify(error)} />;
  }
  if (loading) {
    return <Loader />;
  }
  const portfolios = data?.getMyPortfolio?.data;
  const portfolioList = portfolios?.map((portfolio) => portfolio?.name);

  useEffect(() => {
    if (selected) {
      const myPortfolio = portfolios?.filter(
        (portfolio) => portfolio?.name === selected
      );
      setPortfolioId(myPortfolio[0]?.id);
    }
  }, [selected]);

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
        <div className="flex justify-center">
          <h1 className="font-bold text-xl">Add UPLD to your portfolio</h1>
        </div>
        <div className="flex flex-col ">
          <label>Select Portfolio</label>
          <select
            name="portfolio"
            onChange={(e) => setSelected(e.target.value)}
            className="my-4 px-4 py-2 text-xl font-bold dark:bg-slate-800"
          >
            {portfolioList?.map((item) => (
              <option value={item} className="dark:bg-slate-800">
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
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
