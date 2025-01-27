import CandlestickChart from "../components/charts/CandlestickChart";
import Hero from "../components/hero/Hero";
import { LoggedInUser } from "../ProtectedRoutes";

const MainPage = () => {
  return (
    <>
      <LoggedInUser />
      <Hero />
      <CandlestickChart />
    </>
  );
};

export default MainPage;
