import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error";
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/landing";
import MainPage from "./pages/main";
import MainLayout from "./layouts/MainLayout";
import TickerPage from "./pages/ticker/ticker";
import CompareTicker from "./pages/ticker/compare";
import PortfolioPage from "./pages/portfolio";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <LandingPage />,
      },
      {
        path: "/ticker/:ticker",
        element: <TickerPage />,
      },
      {
        path: "/ticker/compare",
        element: <CompareTicker />,
      },
      {
        path: "/portfolios",
        element: <PortfolioPage />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
