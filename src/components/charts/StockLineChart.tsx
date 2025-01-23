import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { getDataForInterval, LineAxis } from "../../utils/chart";
import { useEffect, useState } from "react";

const StockLineChart = ({ stock1, selectedInterval }) => {
  const [udata, setUdata] = useState(stock1);
  const mData = udata ? LineAxis(udata) : [];
  useEffect(() => {
    if (selectedInterval) {
      const lastEntry = udata[0].date;
      const results = getDataForInterval(udata, selectedInterval, lastEntry);
      if (results) {
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
