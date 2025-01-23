import { useParams } from "react-router-dom";

const TickerPage = () => {
  const { ticker } = useParams();
  return <div>TickerPage {ticker}</div>;
};

export default TickerPage;
