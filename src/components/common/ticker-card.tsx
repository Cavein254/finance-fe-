import React from "react";
import { useNavigate } from "react-router-dom";
import { StockSingleRow } from "../../__generated__/graphql";
import { percentageReturn } from "../../utils/chart";

interface TickercardProps {
  tick: StockSingleRow;
}

const Tickercard = ({ tick }: TickercardProps) => {
  const data = tick?.stockData[0]?.date.toString();
  const tickDate = new Date(data);
  const percentage = percentageReturn(
    tick?.stockData[0]?.close,
    tick?.stockData[0]?.open
  );
  const positive = parseFloat(percentage) > 0;
  const navigate = useNavigate();
  return (
    <div
      className="rounded-xl bg-white flex w-fit dark:bg-black hover:shadow-md hover:shadow-red-300 cursor-pointer"
      onClick={() => {
        navigate(`/ticker/${tick?.ticker}`);
      }}
    >
      <div className="m-2 p-2">
        <h4 className="text-2xl font-bold uppercase text-center">
          {tick?.ticker}
        </h4>
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-bold">{tick?.stockData[0]?.close}</h5>
          <p className={`${positive ? "text-green-600" : "text-red-500"}`}>
            {percentage}%
          </p>
        </div>
        <p className="text-xs">{tickDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Tickercard;
