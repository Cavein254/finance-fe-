import { ModeToggle } from "../common/mode-toggle";
import { Button } from "../ui/button";
import { FaMoneyBills } from "react-icons/fa6";
import { FaUnlockAlt } from "react-icons/fa";
import { useContext } from "react";
import { MyUserContext } from "../../context/UserContext";
import HeaderDropDown from "./HeaderDropDown";
const Header = () => {
  const userContext = useContext(MyUserContext);
  const { user } = userContext;
  return (
    <div className=" bg-green-600">
      <div className="flex justify-between items-center p-4">
        <div className="">
          <FaMoneyBills size={34} className="md:hidden text-slate-50" />
          <div className="hidden md:flex text-3xl font-bold uppercase">
            Unlimit
          </div>
        </div>
        <div></div>
        <div className="flex gap-2">
          <ModeToggle />
          {user ? (
            <HeaderDropDown user={user} />
          ) : (
            <Button className="bg-slate-50 text-slate-900">
              <span className="md:hidden">
                <FaUnlockAlt />
              </span>
              <span className="hidden md:flex">Login</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
