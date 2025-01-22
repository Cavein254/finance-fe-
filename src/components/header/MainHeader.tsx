import { FaFire } from "react-icons/fa";

const MainHeader = () => {
  return (
    <div className="px-4 py-2 border-b-2 border-red-400 flex justify-between">
      <div className=" flex justify-center flex-col items-center gap-2">
        <FaFire size={24} />
        <span className="text-xl font-bold ">Unlimit</span>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default MainHeader;
