interface Props {
  playground: number;
  handlePlayground: (data: number) => void;
}

const Playground = ({ playground, handlePlayground }: Props) => {
  return (
    <div className="mt-5 px-2 flex gap-4">
      <div
        onClick={() => handlePlayground(1)}
        className={
          playground === 1
            ? "bg-rose-600 dark:bg-red-700 text-white px-5 py-2 rounded-lg"
            : "bg-gray-300 dark:bg-slate-800 dark:text-gray-100 px-5 py-2 rounded-lg"
        }
      >
        <h1>Video</h1>
      </div>
      <div
        onClick={() => handlePlayground(2)}
        className={
          playground === 2
            ? "bg-rose-600 dark:bg-red-700 text-white px-5 py-2 rounded-lg"
            : "bg-gray-300 dark:bg-slate-800 dark:text-gray-100 px-5 py-2 rounded-lg"
        }
      >
        <h1>Audio</h1>
      </div>
    </div>
  );
};

export default Playground;
