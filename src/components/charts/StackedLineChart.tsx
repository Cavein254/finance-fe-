import React, { useEffect, useMemo, useState } from "react";
import {
  VictoryChart,
  VictoryLegend,
  VictoryLine,
  VictoryStack,
  VictoryTheme,
} from "victory";
import { StockTicker } from "../../__generated__/graphql";
import { GET_HISTORICAL_DATA } from "../../graphql/operations/query/ticker";
import { useLazyQuery } from "@apollo/client";
import { getDataForInterval, LineAxis } from "../../utils/chart";
import uniqolor from "uniqolor";
import ErrorDisplay from "../common/ErrorDisplay";

interface StackedLineChartProps {
  selected: StockTicker[];
  selectedInterval: string;
}

const StackedLineChart = ({
  selected,
  selectedInterval,
}: StackedLineChartProps) => {
  const allSymbols = selected?.map((symbol) => symbol.ticker);
  const [getHistoricalData] = useLazyQuery(GET_HISTORICAL_DATA);
  const [symbolData, setSymbolData] = useState({});
  const [allErrors, setAllErrors] = useState();

  useEffect(() => {
    const fetchTickers = async (symbols: Array<string> | undefined) => {
      const tempErrors: any = [];
      const tempTickerData: any = {};
      if (symbols && symbols?.length > 0) {
        for (let symbol of symbols) {
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

      setSymbolData(tempTickerData), setAllErrors(tempErrors);
    };
    fetchTickers(allSymbols);
  }, [selected]);

  const chartData = useMemo(() => {
    if (Object.keys(symbolData).length > 0) {
      return Object.entries(symbolData).map(([symbol, data]) => {
        const formattedData = LineAxis(data);
        const lastEntry = formattedData[0]?.x;
        const intervalData = getDataForInterval(
          formattedData,
          selectedInterval,
          lastEntry
        );
        const color = uniqolor.random({
          saturation: 80,
          lightness: [70, 80],
        }).color;
        return {
          symbol,
          data: intervalData,
          color,
        };
      });
    }
    return [];
  }, [symbolData, selectedInterval]);

  const legendData = chartData.map(({ symbol, color }) => ({
    name: symbol,
    symbol: { fill: color },
  }));

  return (
    <div className="flex flex-col pt-4">
      {allErrors?.length > 0 && (
        <ErrorDisplay error={JSON.stringify(allErrors)} />
      )}
      <div className="flex justify-center">
        <h1 className="text-center text-2xl font-bold">Historical Prices</h1>
      </div>
      <VictoryChart theme={VictoryTheme.clean}>
        {chartData.map(({ symbol, data, color }) => (
          <VictoryLine
            key={symbol}
            data={data}
            style={{ data: { stroke: color } }}
          />
        ))}
      </VictoryChart>
      <div className="">
        <VictoryLegend
          x={10}
          y={10}
          title="Stock Performance Comparison"
          centerTitle
          orientation="vertical"
          gutter={10}
          style={{
            border: { stroke: "green" },
            title: { fontSize: 10 },
            labels: { fontSize: 9 },
          }}
          data={legendData}
        />
      </div>
    </div>
  );
};

export default StackedLineChart;
