import { VictoryChart, VictoryCandlestick } from "victory";

const CandlestickChart = () => {
  return (
    <div>
      <VictoryChart
        domainPadding={{ x: 25 }}
        //   theme={VictoryTheme.clean}
      >
        <VictoryCandlestick
          data={[
            {
              x: "3/1/23",
              open: 5,
              close: 10,
              high: 15,
              low: 0,
            },
            {
              x: "3/2/23",
              open: 10,
              close: 15,
              high: 20,
              low: 5,
            },
            {
              x: "3/3/23",
              open: 15,
              close: 20,
              high: 22,
              low: 10,
            },
            {
              x: "3/4/23",
              open: 20,
              close: 10,
              high: 25,
              low: 7,
            },
            {
              x: "3/5/23",
              open: 10,
              close: 8,
              high: 15,
              low: 5,
            },
          ]}
        />
      </VictoryChart>
    </div>
  );
};

export default CandlestickChart;
