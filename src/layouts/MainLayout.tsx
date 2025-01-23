import { Outlet } from "react-router-dom";
import MainHeader from "../components/header/MainHeader";

const MainLayout = () => {
  return (
    <>
      <nav>
        <MainHeader />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
