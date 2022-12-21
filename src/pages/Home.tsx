import Features from "../components/Features";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Tutorial from "../components/Tutorial";

const Home = () => {
  return (
    <>
      <div className="px-3 py-5 md:py-20 lg:py-12 dark:text-gray-100 dark:bg-[#141416] duration-500">
        <div className="flex flex-col md:gap-2 text-center text-slate-700 dark:text-gray-100 duration-500">
          <h1 className="text-lg md:text-3xl font-bold ">
            Unduh Video dan Audio dari Youtube
          </h1>
          <p className="md:text-xl">Secara gratis di perangkat apapun</p>
        </div>

        <Form />
        <Tutorial />
        <Features />
      </div>
      <Footer />
    </>
  );
};

export default Home;
