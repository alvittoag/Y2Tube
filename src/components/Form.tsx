import { SubmitHandler, useForm } from "react-hook-form";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Inputs {
  data: string;
}

const Form = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (res) => {
    navigate("/download", { state: { result: res.data } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-5 md:py-14 lg:mt-5 flex justify-center items-stretch">
        <input
          placeholder="Tempel Tautan Youtube Disini "
          {...register("data")}
          type="text"
          className="ring-1 ring-gray-300 px-3 py-3 rounded-md md:rounded-none md:rounded-l-md focus:outline-none focus:ring-gray-300 md:w-[560px] lg:w-[690px] w-full lg:py-5 dark:bg-slate-800 dark:ring-slate-700 dark:focus:ring-slate-700 dark:focus:outline-none duration-500"
        />
        <button className="rounded-r-md px-3 ring-1 ring-gray-300 flex items-center gap-1 bg-rose-600  text-white md:text-lg md:px-4 md:gap-2 lg:px-6 lg:text-xl absolute right-0 py-[12px] mr-3 md:static md:mr-0 dark:bg-rose-700 dark:ring-slate-700 duration-500">
          Start <FaPlay size={14} />
        </button>
      </div>
    </form>
  );
};

export default Form;
