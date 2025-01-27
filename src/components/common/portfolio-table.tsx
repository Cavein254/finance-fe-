import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const PortfolioTable = ({ portfolios }) => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">A list of your portfolios</h1>
      </div>
      <div className="">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Portfolio Name</TableHead>
              <TableHead>Portfolio Desccription</TableHead>
              <TableHead>Stocks Available</TableHead>
              <TableHead className="text-right">Total InvestMent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {portfolios?.map((item) => (
              <TableRow>
                <TableCell className="font-medium">{item?.name}</TableCell>
                <TableCell>{item?.description}</TableCell>
                <TableCell>
                  {item?.stocks?.map((stock) => (
                    <span>{` ${stock.ticker}`}</span>
                  ))}
                </TableCell>
                <TableCell className="text-right">
                  ${item?.totalInvestment}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PortfolioTable;
