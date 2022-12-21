import { BsCloudDownload } from "react-icons/bs";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { CgBrowser } from "react-icons/cg";

const Features = () => {
  return (
    <div className="py-8 flex flex-col md:grid md:grid-cols-3 md:items-center md:gap-24 md:py-20 md:px-14 gap-9 lg:mt-12 lg:px-36">
      <div className="flex flex-col justify-center">
        <BsCloudDownload className="text-5xl mx-auto md:text-6xl" />
        <div className="text-center flex flex-col gap-2 mt-3">
          <h1 className="text-red-700 font-bold lg:text-2xl md:text-xl dark:text-red-600">
            Unduh Gratis
          </h1>
          <p className="text-sm lg:text-lg">
            Konversi dan unduh secara gratis tanpa batas.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <AiOutlinePlaySquare className="text-5xl mx-auto md:text-6xl" />
        <div className="text-center flex flex-col gap-2 mt-3">
          <h1 className="text-red-700 font-bold md:text-xl lg:text-2xl dark:text-red-600">
            Video & Audio
          </h1>
          <p className="text-sm lg:text-lg">Unduh langsung Video & Musik.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <CgBrowser className="text-5xl mx-auto md:text-6xl" />
        <div className="text-center flex flex-col gap-2 mt-3">
          <h1 className="text-red-700 font-bold md:text-xl lg:text-2xl dark:text-red-600">
            Unduh Dengan Mudah
          </h1>
          <p className="text-sm lg:text-lg">
            Kompatibel dengan semua browsers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
