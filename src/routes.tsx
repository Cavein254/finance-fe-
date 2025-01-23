import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error";
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/landing";
import MainPage from "./pages/main";
import MainLayout from "./layouts/MainLayout";
import TickerPage from "./pages/ticker/ticker";

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
