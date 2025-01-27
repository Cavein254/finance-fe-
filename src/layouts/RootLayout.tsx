import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SearchBar from "../components/common/SearchBar";

const RootLayout = () => {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main className="bg-slate-100 min-h-[100vh] dark:bg-slate-800">
        <SearchBar />
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
