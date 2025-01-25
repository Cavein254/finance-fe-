import React from "react";
import StackedLineChart from "../../components/charts/StackedLineChart";
import { Pill } from "lucide-react";
import { useQuery } from "@apollo/client";
import { GET_ALL_STOCK_SYMBOLS } from "../../graphql/operations/query/ticker";
import ErrorDisplay from "../../components/common/ErrorDisplay";

const CompareTicker = () => {
  const { error } = useQuery(GET_ALL_STOCK_SYMBOLS, {
    onCompleted: (data) => {
      if (!data?.getAllSymbols.success) {
      }
    },
  });
  return (
    <div>
      {error && <ErrorDisplay error={JSON.stringify(error)} />}
      <button className="px-4 py-2 bg-indigo-400 text-white rounded-xl">
        mfst
      </button>
      <StackedLineChart />
    </div>
  );
};

export default CompareTicker;
