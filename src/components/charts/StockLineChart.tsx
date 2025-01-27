import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { getDataForInterval, LineAxis } from "../../utils/chart";
import { useEffect, useState } from "react";
import { StatisticsType } from "../../pages/ticker/types";
import {
  averageDailyReturns,
  dailyReturns,
  standardDeviation,
  volatility,
} from "../../utils/statistics";
interface StockLineChartProps {
  stock1: any;
  selectedInterval: string;
  setStatistics: (arg0: StatisticsType) => void;
}

const StockLineChart = ({
  stock1,
  selectedInterval,
  setStatistics,
}: StockLineChartProps) => {
  const [udata, setUdata] = useState(undefined);
  const mData = udata ? LineAxis(udata) : LineAxis(stock1);

  useEffect(() => {
    if (selectedInterval && stock1 !== undefined && stock1.length > 0) {
      const lastEntry = stock1[0].date;
      const results = getDataForInterval(stock1, selectedInterval, lastEntry);

      if (results && results.length > 0) {
        setUdata(results);
      }

      const stockVol = volatility(udata ? udata : stock1);
      const stockAret = averageDailyReturns(udata ? udata : stock1);
      const stockSd = standardDeviation(udata ? udata : stock1);
      setStatistics({
        returns: stockAret,
        sd: stockSd,
        volatility: stockVol,
      });
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
