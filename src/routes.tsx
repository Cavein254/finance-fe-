import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error";
import RootLayout from "./components/layouts/RootLayout";
import LandingPage from "./pages/landing";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
