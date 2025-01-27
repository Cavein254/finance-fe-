import StackedLineChart from "../../components/charts/StackedLineChart";
import { useQuery } from "@apollo/client";
import { GET_ALL_STOCK_SYMBOLS } from "../../graphql/operations/query/ticker";
import ErrorDisplay from "../../components/common/ErrorDisplay";
import { useState } from "react";
import { StockTicker } from "../../__generated__/graphql";
import PillButton from "../../components/common/PillButton";
import { Button } from "../../components/ui/button";
import DurationBtn from "../../components/common/duration-btn";

const CompareTicker = () => {
  const [symbols, setSymbols] = useState<Array<StockTicker> | undefined>(
    undefined
  );
  const [selectedInterval, setSelectedInterval] = useState<undefined | string>(
    "11yr"
  );
  const [selected, setSelected] = useState<Array<StockTicker>>([]);

  const [compare, setCompare] = useState(false);

  const [title, setTitle] = useState(undefined);

  const handleClear = () => {
    setSelected([]);
  };

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
      key={symbol.id}
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
              <div className="flex gap-2">
                <Button onClick={() => setCompare(true)}>Compare</Button>
                <Button onClick={handleClear} className="bg-red-600">
                  Clear
                </Button>
              </div>
            </div>
          </div>
        )}
        <div className=" dark:bg-slate-600 bg-slate-300 p-2 flex flex-wrap justify-center items-center gap-2 h-[20vh] overflow-scroll">
          {symbolsList}
        </div>
      </div>
      <div className="m-4 p-4">
        <DurationBtn
          selectedInterval={selectedInterval}
          setSelectedInterval={setSelectedInterval}
          setTitle={setTitle}
        />
        {compare && (
          <StackedLineChart
            selected={selected}
            selectedInterval={selectedInterval}
          />
        )}
      </div>
    </div>
  );
};

export default CompareTicker;
