import { useState } from "react";
import { StockTicker } from "../../__generated__/graphql";

interface PillButtonProps {
  symbol: StockTicker;
  handleAddTicker: (arg0: StockTicker) => void;
  handleRemoveTicker: (arg0: string) => void;
}

const PillButton = ({
  symbol,
  handleAddTicker,
  handleRemoveTicker,
}: PillButtonProps) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    if (active === false) {
      handleAddTicker(symbol);
      return setActive(true);
    } else {
      handleRemoveTicker(symbol.id);
      return setActive(false);
    }
  };
  return (
    <button
      className={`px-2 py-1  text-white rounded-xl text-sm ${
        active ? "bg-green-600" : "bg-indigo-400"
      }`}
      onClick={handleClick}
    >
      {symbol.name}
    </button>
  );
};

export default PillButton;
