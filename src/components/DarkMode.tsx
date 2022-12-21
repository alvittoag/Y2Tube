import { BsCloudMoonFill, BsFillMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";

const DarkMode = () => {
  const [darkmode, setDarkmode] = useState<boolean>(false);
  const element = document.documentElement;

  const handleDarkMode = () => {
    setDarkmode(!darkmode);
  };

  useEffect(() => {
    switch (darkmode) {
      case true:
        element.classList.add("dark");

        break;
      case false:
        element.classList.remove("dark");

      default:
        break;
    }
  }, [darkmode]);

  return (
    <div onClick={handleDarkMode} className="cursor-pointer">
      {darkmode ? (
        <MdOutlineLightMode
          size={25}
          className="dark:text-yellow-200 font-bold "
        />
      ) : (
        <BsCloudMoonFill size={25} />
      )}
    </div>
  );
};

export default DarkMode;
