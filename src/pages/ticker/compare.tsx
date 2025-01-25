import StackedLineChart from "../../components/charts/StackedLineChart";
import { useQuery } from "@apollo/client";
import { GET_ALL_STOCK_SYMBOLS } from "../../graphql/operations/query/ticker";
import ErrorDisplay from "../../components/common/ErrorDisplay";
import { useState } from "react";
import { StockTicker } from "../../__generated__/graphql";
import PillButton from "../../components/common/PillButton";
import { Button } from "../../components/ui/button";

const CompareTicker = () => {
  const [symbols, setSymbols] = useState<Array<StockTicker> | undefined>(
    undefined
  );
  const [selected, setSelected] = useState<Array<StockTicker>>([]);

  const handleAddTicker = (ticker: StockTicker) => {
    setSelected((prevSelected) => {
      if (!prevSelected.some((item) => item.id === ticker.id)) {
        return [...prevSelected, ticker];
      }
      return prevSelected;
    });
  };
  const handleRemoveTicker = (id: string) => {
    setSelected((prevSelected) =>
      prevSelected.filter((ticker) => ticker.id !== id)
    );
  };

  console.log(selected);

  const { error } = useQuery(GET_ALL_STOCK_SYMBOLS, {
    onCompleted: (data) => {
      if (data?.getAllSymbols.success) {
        const udata = data?.getAllSymbols.data;
        setSymbols(udata);
      }
    },
  });
  const symbolsList = symbols?.map((symbol) => (
    <PillButton
      symbol={symbol}
      handleAddTicker={handleAddTicker}
      handleRemoveTicker={handleRemoveTicker}
    />
  ));
  const selectedSymbols = selected?.map((symbol) => (
    <PillButton
      symbol={symbol}
      handleAddTicker={handleAddTicker}
      handleRemoveTicker={handleRemoveTicker}
    />
  ));
  return (
    <div>
      {error && <ErrorDisplay error={JSON.stringify(error)} />}
      <div className="px-4">
        {selected.length > 0 && (
          <div className="py-6 flex flex-col">
            <h4 className="font-bold mb-2">
              You have selected the following symbols to compare:
            </h4>
            <div className="flex justify-between">
              <div className="flex gap-2 flex-wrap">{selectedSymbols}</div>
              <div className="">
                <Button>Compare</Button>
              </div>
            </div>
          </div>
        )}
        <div className=" dark:bg-slate-600 bg-slate-300 p-2 flex flex-wrap justify-center items-center gap-2 h-[30vh] overflow-scroll">
          {symbolsList}
        </div>
      </div>
      <StackedLineChart />
    </div>
  );
};

export default CompareTicker;
