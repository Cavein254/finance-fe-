import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_HISTORICAL_DATA } from "../../graphql/operations/query/ticker";
import { useEffect, useState } from "react";
import StockLineChart from "../../components/charts/StockLineChart";
import DurationBtn from "../../components/common/duration-btn";
import { getDataForInterval, Interval } from "../../utils/chart";

const TickerPage = () => {
  const [stock1, setStock1] = useState(undefined);
  const [stock2, setStock2] = useState(undefined);
  const [selectedInterval, setSelectedInterval] = useState<undefined | string>(
    undefined
  );
  const { ticker } = useParams();
  const [fetchError, setFetcherror] = useState("");
  const { data, error, loading } = useQuery(GET_HISTORICAL_DATA, {
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
    console.log(error);
  }
  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="">
      {fetchError && (
        <div className="px-4 py-2 bg-red-400">
          <h4 className="text-slate-50 text-xl">{fetchError}</h4>
        </div>
      )}
      <div className="">
        <DurationBtn
          selectedInterval={selectedInterval}
          setSelectedInterval={setSelectedInterval}
        />
        <StockLineChart stock1={stock1} selectedInterval={selectedInterval} />
      </div>
    </div>
  );
};

export default TickerPage;
