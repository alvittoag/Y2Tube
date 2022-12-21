import React from "react";
import { DataApi } from "../Model";
interface Props {
  data: DataApi | undefined;
}

const Info = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-1 items-stretch">
      <img
        className="w-full rounded-lg ring ring-gray-200 dark:ring-slate-800"
        src={data?.thumb}
        alt={data?.title}
      />
      <div className="flex px-2 flex-col gap-2 mt-1">
        <h1 className="text-lg font-bold text-slate-700 dark:text-gray-100">
          {data?.title}
        </h1>
        <div className="flex gap-2 font-bold text-slate-700 dark:text-gray-300">
          <p className="text-sm">
            {Number(data?.views).toLocaleString("en-US")} x ditonton
          </p>
          <p className="text-sm">{data?.published}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
