import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { getDataForInterval, LineAxis } from "../../utils/chart";
import { useEffect, useState } from "react";
interface StockLineChartProps {
  stock1: any;
  selectedInterval: string;
}

const StockLineChart = ({ stock1, selectedInterval }: StockLineChartProps) => {
  const [udata, setUdata] = useState(undefined);
  const mData = udata ? LineAxis(udata) : LineAxis(stock1);

  useEffect(() => {
    if (selectedInterval && stock1 !== undefined && stock1.length > 0) {
      const lastEntry = stock1[0].date;
      const results = getDataForInterval(stock1, selectedInterval, lastEntry);
      if (results && results.length > 0) {
        setUdata(results);
      }
    }
  }, [selectedInterval]);

  return (
    <div>
      <VictoryChart theme={VictoryTheme.clean}>
        {mData && <VictoryLine data={mData} />}
      </VictoryChart>
    </div>
  );
};

export default StockLineChart;
