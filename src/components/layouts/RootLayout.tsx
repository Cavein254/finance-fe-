import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <nav>
        <h1>Header</h1>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
