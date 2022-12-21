import { AiFillYoutube } from "react-icons/ai";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-3 md:px-10 py-4 md:py-6 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700 border-b border-white ring-white text-white dark:bg-[#1A1B1E] dark:from-[#1A1B1E] dark:border-b dark:border-gray-700 dark:text-gray-100 duration-500">
      <div className="flex items-center gap-1 text-xl md:text-2xl font-bold cursor-default ">
        <AiFillYoutube className="dark:text-red-500 duration-500" size={24} />
        Y2Tube
      </div>
      <DarkMode />
    </div>
  );
};

export default Navbar;
