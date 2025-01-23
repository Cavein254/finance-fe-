import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error";
import RootLayout from "./components/layouts/RootLayout";
import LandingPage from "./pages/landing";
import MainPage from "./pages/main";
import MainLayout from "./components/layouts/MainLayout";
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
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/ticker/:ticker",
        element: <TickerPage />,
      },
    ],
  },
]);

export default router;
