import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_HISTORICAL_DATA } from "../../graphql/operations/query/ticker";
import { useState } from "react";

const TickerPage = () => {
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
    },
  });
  if (error) {
    console.log(error);
  }
  if (loading) {
    return <h1>Loading ...</h1>;
  }
  console.log(data);
  return (
    <div className="">
      {fetchError && (
        <div className="px-4 py-2 bg-red-400">
          <h4 className="text-slate-50 text-xl">{fetchError}</h4>
        </div>
      )}
    </div>
  );
};

export default TickerPage;
