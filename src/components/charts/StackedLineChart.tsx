import React, { useEffect, useState } from "react";
import { VictoryChart, VictoryLine, VictoryStack, VictoryTheme } from "victory";
import { StockTicker } from "../../__generated__/graphql";
import { useLazyQuery } from "@apollo/client";
import { GET_HISTORICAL_DATA } from "../../graphql/operations/query/ticker";

interface StackedLineChartProps {
  selected: StockTicker[];
}

const StackedLineChart = ({ selected }: StackedLineChartProps) => {
  const allSymbols = selected?.map((symbol) => symbol.ticker);
  const [getHistoricalData] = useLazyQuery(GET_HISTORICAL_DATA);
  const [symbolData, setSymbolData] = useState();
  const allErrors = [];

  useEffect(() => {
    const fetchTickers = async () => {
      const tempErrors: any = [];
      const tempTickerData: any = {};
      if (allSymbols.length > 0) {
        for (let symbol of allSymbols) {
          await getHistoricalData({
            variables: {
              symbol,
            },
            onCompleted: (data) => {
              if (!data?.getHistoricalData?.success) {
                const err = data?.getHistoricalData?.error;
                tempErrors.push(`${symbol}:${err}`);
              }
              if (data?.getHistoricalData?.data.length < 1) {
                tempErrors.push(`${symbol}:No data`);
              }
              const udata = data?.getHistoricalData?.data;
              tempTickerData[symbol] = udata;
            },
          });
        }
      }
      setSymbolData(tempTickerData);
      allErrors.push(tempErrors);
    };
    fetchTickers();
  }, [selected]);
  console.log(symbolData["AVGR"]);
  return (
    <div>
      {/* <VictoryChart theme={VictoryTheme.clean}>
        <VictoryStack colorScale="qualitative">
          <VictoryLine
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 },
            ]}
          />
          <VictoryLine
            data={[
              { x: 1, y: 4 },
              { x: 2, y: 2 },
              { x: 3, y: 7 },
              { x: 4, y: 5 },
              { x: 5, y: 3 },
            ]}
          />
        </VictoryStack>
      </VictoryChart> */}
    </div>
  );
};

export default StackedLineChart;
