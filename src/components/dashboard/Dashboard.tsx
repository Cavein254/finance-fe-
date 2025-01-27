import { useQuery } from "@apollo/client";
import React from "react";
import { GET_HISTORICAL_FIRST_ROW } from "../../graphql/operations/query/ticker";
import Tickercard from "../common/ticker-card";
import { StockSingleRow } from "../../__generated__/graphql";
import Loader from "../common/loader";

const Dashboard = () => {
  const { data, error, loading } = useQuery(GET_HISTORICAL_FIRST_ROW);
  if (error) {
    return <h1>Unable to load page!</h1>;
  }
  if (loading) {
    return <Loader />;
  }
  const tickerData = data?.getHistoricalFirstRow?.data;

  const allTicks: Array<StockSingleRow> = tickerData?.map(
    (tick: StockSingleRow) => <Tickercard tick={tick} key={tick.id} />
  );
  return (
    <div className="flex gap-2 flex-wrap justify-center items-center">
      {allTicks}
    </div>
  );
};

export default Dashboard;
