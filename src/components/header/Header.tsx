import { ModeToggle } from "../common/mode-toggle";
import { Button } from "../ui/button";
import { FaFire, FaMoneyBills } from "react-icons/fa6";
import { FaUnlockAlt } from "react-icons/fa";
import { useContext } from "react";
import { MyUserContext } from "../../context/UserContext";
import HeaderDropDown from "./HeaderDropDown";
import { Link } from "react-router-dom";

const VITE_SERVER_LOGIN: string = import.meta.env.VITE_SERVER_LOGIN as string;

const Header = () => {
  const userContext = useContext(MyUserContext);
  const { user } = userContext;
  return (
    <div className=" bg-green-600">
      <div className="flex justify-between items-center p-4 ">
        <Link
          to="/dashboard"
          className=" flex justify-center flex-col items-center gap-2 text-slate-50"
        >
          <FaFire size={24} />
          <span className="text-xl font-bold ">Unlimit</span>
        </Link>
        <div></div>
        <div className="flex gap-2">
          <ModeToggle />
          {user ? (
            <HeaderDropDown user={user} />
          ) : (
            <Link to={`${VITE_SERVER_LOGIN}`}>
              <Button className="bg-slate-50 text-slate-900">
                <span className="md:hidden">
                  <FaUnlockAlt />
                </span>
                <span className="hidden md:flex">Login</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
