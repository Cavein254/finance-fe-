import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_HISTORICAL_DATA } from "../../graphql/operations/query/ticker";
import { useEffect, useState } from "react";
import StockLineChart from "../../components/charts/StockLineChart";
import DurationBtn from "../../components/common/duration-btn";
import Loader from "../../components/common/loader";
import { StatisticsType } from "./types";
import StatsInfo from "../../components/common/StatsInfo";
import ErrorDisplay from "../../components/common/ErrorDisplay";
import { Button } from "../../components/ui/button";
import Portfolio from "../../components/modal/Portfolio";

const TickerPage = () => {
  const [stock1, setStock1] = useState(undefined);
  const [title, setTitle] = useState(undefined);
  const [open, setOpen] = useState<boolean>(false);
  const [statistics, setStatistics] = useState<StatisticsType>();
  const [selectedInterval, setSelectedInterval] = useState<undefined | string>(
    undefined
  );
  const { ticker } = useParams();
  const peak = stock1 ? stock1[0].close > stock1[0].open : false;
  const [fetchError, setFetcherror] = useState("");
  const { error, loading } = useQuery(GET_HISTORICAL_DATA, {
    variables: {
      symbol: ticker?.toUpperCase(),
    },
    onCompleted: (data) => {
      if (!data?.getHistoricalData?.success) {
        setFetcherror(data?.getHistoricalData?.error);
      }
      if (data?.getHistoricalData?.success) {
        setStock1(data?.getHistoricalData?.data);
      }
    },
  });
  if (error) {
    <ErrorDisplay error={JSON.stringify(error)} />;
  }
  if (loading) {
    return <Loader />;
  }

  const handleModal = () => {
    console.log("clicked");
    setOpen(false);
  };

  return (
    <div className="w-full">
      {open && (
        <Portfolio
          handleModal={handleModal}
          price={stock1[0]?.close}
          ticker={ticker}
        />
      )}
      {fetchError && (
        <div className="px-4 py-2">
          <h4 className="text-slate-50 text-xl">{fetchError}</h4>
        </div>
      )}
      <div className="p-4 flex flex-row w-full">
        <div className="w-1/3">
          <StatsInfo statistics={statistics} />
        </div>
        <div className=" w-2/3">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-3xl font-bold uppercase">{ticker}</h1>
            </div>
            <div className="">
              <Button onClick={() => setOpen(true)}>Add to Porfolio</Button>
            </div>
          </div>
          <div className="border-b-2 border-gray-400 my-4" />
          <div className="flex justify-between ">
            <div className="w-1/2 ">
              <h2>{title}</h2>
            </div>
            <div className="flex justify-between w-1/2">
              <div className="flex">
                <span>
                  <p className="font-bold">Close</p>
                </span>
                <h4
                  className={`${
                    peak ? "text-green-800 " : "text-red-500"
                  } text-6xl`}
                >
                  {stock1 ? stock1[0].close : ""}
                </h4>
              </div>
              <div className="flex">
                <span>
                  <p className="font-bold">Open</p>
                </span>
                <h4
                  className={`${
                    peak ? "text-red-500 " : "text-green-800"
                  } text-6xl`}
                >
                  {stock1 ? stock1[0].open : ""}
                </h4>
              </div>
            </div>
          </div>
          <DurationBtn
            selectedInterval={selectedInterval}
            setSelectedInterval={setSelectedInterval}
            setTitle={setTitle}
          />
          <StockLineChart
            stock1={stock1}
            selectedInterval={selectedInterval}
            setStatistics={setStatistics}
          />
        </div>
      </div>
    </div>
  );
};

export default TickerPage;
