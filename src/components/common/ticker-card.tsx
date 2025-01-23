import React from "react";
import { useNavigate } from "react-router-dom";

const Tickercard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-xl bg-white flex w-fit dark:bg-black hover:shadow-md hover:shadow-red-300 cursor-pointer"
      onClick={() => {
        navigate(`/ticker/msft`);
      }}
    >
      <div className="m-2 p-2">
        <h4 className="text-xl font-bold uppercase">nfst</h4>
        <h5>234.34</h5>
        <p>12/11/2023 3:23 PM</p>
      </div>
    </div>
  );
};

export default Tickercard;
