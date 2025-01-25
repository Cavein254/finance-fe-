import { useQuery } from "@apollo/client";
import { Search } from "lucide-react";
import { useState } from "react";
import { GET_ALL_STOCK_SYMBOLS } from "../../graphql/operations/query/ticker";

const SearchBar = () => {
  const [stock, setStock] = useState("");
  const { data, loading } = useQuery(GET_ALL_STOCK_SYMBOLS);
  const allSymbols = data?.getAllSymbols?.data?.map((tick) => tick.ticker);
  console.log(allSymbols);

  const filteredSymbols = stock
    ? allSymbols.filter((symbol) =>
        symbol.toLowerCase().startsWith(stock.toLowerCase())
      )
    : [];

  return (
    <div className="border-2 border-blue-500 w-full px-4 py-6 flex justify-center items-center">
      <div className="flex flex-col w-full ">
        <input
          placeholder="Enter stock ticker e.g MSFT"
          className="w-[75%] pl-12 py-2 font-bold text-xl uppercase"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <Search size={32} className="-mt-9 ml-2  text-gray-500 font-bold" />
        {stock && filteredSymbols.length > 0 && (
          <div className="relative bg-gray-100 mt-4 w-[75%] border border-gray-300 rounded shadow-xl">
            {filteredSymbols.map((symbol, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-blue-200 cursor-pointer"
                onClick={() => setStock(symbol)}
              >
                {symbol}
              </div>
            ))}
          </div>
        )}
        {stock && filteredSymbols.length === 0 && (
          <div className="relative bg-gray-100 mt-2 w-[75%] px-4 py-2 text-gray-500">
            No stock symbols found.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
