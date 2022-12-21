import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-9 flex flex-col items-center md:bottom-0 md:absolute md:w-full lg:static border-t border-t-gray-200 dark:bg-[#1A1B1E] dark:border-t-gray-700 duration-500">
      <div className="dark:text-gray-100">
        <h1 className="text-center font-light">Alvitto Aprilian Gumay</h1>
        <p className="text-center font-light">Code Run - Frontend Warriors</p>
      </div>
      <div className="flex justify-center gap-7 mt-3 dark:text-gray-100">
        <BsFacebook size={25} />
        <BsGithub size={25} />
        <BsInstagram size={25} />
        <BsLinkedin size={25} />
      </div>
    </div>
  );
};

export default Footer;
