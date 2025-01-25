import React from "react";
import { VictoryChart, VictoryLine, VictoryStack, VictoryTheme } from "victory";

const StackedLineChart = ({}) => {
  return (
    <div>
      <VictoryChart theme={VictoryTheme.clean}>
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
      </VictoryChart>
    </div>
  );
};

export default StackedLineChart;
