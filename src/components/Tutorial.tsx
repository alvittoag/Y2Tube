const Tutorial = () => {
  return (
    <div className="lg:mt-6">
      <h1 className=" py-3 font-bold text-slate-700 dark:text-gray-100 md:text-center md:text-xl lg:text-2xl">
        Tata Cara Penggunaan
      </h1>
      <ul className="list-decimal flex flex-col gap-3 md:list-none px-4 md:text-center md:text-lg lg:gap-5">
        <li>
          Cari video yang anda pilih lalu salin link url nya, setelah itu paste
          pada input
        </li>
        <li>Klik tombol "Start" untuk memulai proses konversi.</li>
        <li>
          Pilih format video/audio yang anda inginkan untuk diunduh, kemudian
          klik tombol "Download".
        </li>
      </ul>
    </div>
  );
};

export default Tutorial;
