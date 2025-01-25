import React, { useEffect, useState } from "react";
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
import { LineAxis } from "../../utils/chart";
import uniqolor from "uniqolor";

interface StackedLineChartProps {
  selected: StockTicker[];
}

const StackedLineChart = ({ selected }: StackedLineChartProps) => {
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

  const legendData: any = [];
  const allMyInfor = () => {
    if (Object.keys(symbolData).length >= 0) {
      const allDataMapped = Object.entries(symbolData).map(([key, value]) => {
        return { symbol: key, data: value };
      });
      return allDataMapped?.map((ticker) => {
        const mData = LineAxis(ticker.data);
        if (mData) {
          const mycolor = uniqolor.random({
            saturation: 80,
            lightness: [70, 80],
          });
          legendData.push({
            name: ticker.symbol,
            symbol: { fill: mycolor.color },
          });
          return (
            <VictoryLine
              key={ticker.symbol}
              data={mData}
              style={{
                data: {
                  stroke: mycolor.color,
                },
              }}
            />
          );
        }
        return null;
      });
    }
    return null;
  };

  return (
    <div className="flex flex-col">
      <h1>Historical Prices</h1>
      <VictoryChart theme={VictoryTheme.clean}>{allMyInfor()}</VictoryChart>
      <div className="border-2 border-red-500">
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
