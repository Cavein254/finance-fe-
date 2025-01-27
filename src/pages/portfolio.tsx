import React from "react";
import PortfolioTable from "../components/common/portfolio-table";
import { useQuery } from "@apollo/client";
import { GET_MY_PORTFOLIO } from "../graphql/operations/query/user";

const PortfolioPage = () => {
  const { data } = useQuery(GET_MY_PORTFOLIO);
  const allPortfolios = data?.getMyPortfolio.data;
  console.log(allPortfolios);
  return <PortfolioTable portfolios={allPortfolios} />;
};

export default PortfolioPage;
