import Link from "next/link";

export default function Help() {
  return (
    <div>
      <div className="mt-10 text-center">
        <h1 className="font-semibold mb-6 text-2xl">
          Hai, apa yang bisa kami bantu?
        </h1>
      </div>
      <div className="justify-center items-center flex">
        <form className="max-w-sm">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
        </form>
      </div>
      <div className="justify-center items-center flex mt-10">
        <div className="relative w-full lg:max-w-sm">
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>Cara Menggunakan</option>
            <option>Cara Memesan</option>
          </select>
        </div>
      </div>{" "}
      <div className="justify-center items-center flex">
        <div className="relative w-full lg:max-w-sm">
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>Cara Menggunakan</option>
            <option>Cara Memesan</option>
          </select>
        </div>
      </div>
      <div className="justify-center items-center flex">
        <div className="relative w-full lg:max-w-sm">
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>Cara Menggunakan</option>
            <option>Cara Memesan</option>
          </select>
        </div>
      </div>
      <div className="justify-center items-center flex">
        <div className="relative w-full lg:max-w-sm">
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>Cara Menggunakan</option>
            <option>Cara Memesan</option>
          </select>
        </div>
      </div>
      <div className="justify-center items-center flex">
        <div className="relative w-full lg:max-w-sm">
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>Cara Menggunakan</option>
            <option>Cara Memesan</option>
          </select>
        </div>
      </div>
      <div className="w-screen text-center justify-center py-10">
        <h1 className="font-semibold mb-5">Tidak dapat menemukan jawaban?</h1>
        <h1>Lihat tutorial atau hubungi tim kami</h1>
      </div>
      <div className="flex items-center w-full h-full justify-center">
        <div>
          <Link
            href="https://discord.gg/sAkrZXYC"
            className="flex bg-grey-400 text-black active:bg-white hover:bg-white justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          >
            Hubungi Team Kami
          </Link>
        </div>
      </div>
    </div>
  );
}
