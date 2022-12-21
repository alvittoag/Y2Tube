import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { getApi } from "../api/getApi";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Playground from "../components/Playground";
import { DataApi } from "../Model";

const Download = () => {
  const { state } = useLocation();
  const { result } = state;

  const { data, isFetching } = getApi(
    `https://api.hayo.my.id/api/yt/download?url=${result}`
  );

  const [playground, setPlayground] = useState(1);

  const handlePlayground = (data: number) => {
    setPlayground(data);
  };

  return (
    <div className="dark:bg-[#141416] duration-500">
      {isFetching ? (
        <p className="">loading</p>
      ) : (
        <>
          <div className="py-5 px-3">
            <Info data={data} />

            <Playground
              playground={playground}
              handlePlayground={handlePlayground}
            />

            {playground == 1 && (
              <div className="py-12 px-2">
                <table className="border table-fixed">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 dark:border-slate-800 text-slate-800 py-2 dark:text-slate-100">
                        Quality
                      </th>
                      <th className="border border-gray-300 text-slate-800 dark:border-slate-800 dark:text-slate-100 py-2">
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      Object.values(data?.video).map(
                        (video: DataApi, key: number) => (
                          <tr key={key}>
                            <td className="border border-gray-300 dark:border-slate-800 dark:text-gray-300 w-3/4 text-center">
                              {video.quality}
                            </td>
                            <td className="border border-gray-300 dark:border-slate-800 p-3">
                              <a href={video.url}>
                                <div className="flex gap-1 bg-green-600 px-3 py-2 rounded-md text-white">
                                  <AiOutlineDownload size={24} />
                                  download
                                </div>
                              </a>
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            )}

            {playground == 2 && (
              <div className="py-12 px-2">
                <table className="border table-fixed">
                  <thead>
                    <tr>
                      <th className="border  border-gray-300 text-slate-700 dark:border-slate-800 dark:text-gray-100 py-2 ">
                        Bitrate
                      </th>
                      <th className="border border-gray-300 text-slate-700 py-2 dark:border-slate-800 dark:text-gray-100">
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      Object.values(data?.audio).map(
                        (audio: DataApi, key: number) => (
                          <tr key={key}>
                            <td className="border border-gray-300 dark:border-slate-700 dark:text-gray-300 w-3/4 text-center">
                              {audio.bitrate}
                            </td>
                            <td className="border border-gray-300 dark:border-slate-700 p-3">
                              <a href={audio.url}>
                                <div className="flex gap-1 bg-green-600 px-3 py-2 rounded-md text-white">
                                  <AiOutlineDownload size={24} />
                                  download
                                </div>
                              </a>
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Download;
