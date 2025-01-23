import { FaFire } from "react-icons/fa";
import { Button } from "../ui/button";
import { FaPersonWalking } from "react-icons/fa6";

const MainHeader = () => {
  const handleLogin = () => {
    return window.location.replace("http://localhost:4001/auth/google");
  };
  return (
    <div className="px-4 py-2 border-b-2 border-red-400 flex justify-between">
      <div className=" flex justify-center flex-col items-center gap-2">
        <FaFire size={24} />
        <span className="text-xl font-bold ">Unlimit</span>
      </div>
      <div className=""></div>
      <div className="">
        <Button onClick={handleLogin}>
          <FaPersonWalking size={28} />
          <span className="text-xl">Sign In</span>
        </Button>
      </div>
    </div>
  );
};

export default MainHeader;
