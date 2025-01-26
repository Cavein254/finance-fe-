import { StatisticsType } from "../../pages/ticker/types";

interface StatInfoProps {
  statistics: StatisticsType;
}

const StatsInfo = ({ statistics }: StatInfoProps) => {
  return (
    <div>
      <div className="flex mr-4 flex-col">
        <div className="flex items-center flex-col">
          <h4 className="font-bold text-2xl">Statistics</h4>
        </div>
        <div className="">
          <h5>
            Average Daily Returns:{" "}
            <span className="font-bold">
              {(statistics?.returns * 100).toFixed(4)} %
            </span>
          </h5>
          <h5>
            Volatility:{" "}
            <span className="font-bold">
              {(statistics?.volatility * 100).toFixed(4)} %
            </span>
          </h5>
          <h5>
            Standard Deviation (Risk):{" "}
            <span className="font-bold">
              {(statistics?.sd * 100).toFixed(4)} %
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default StatsInfo;
