import Link from "next/link";

export default function Invoice() {
  return (
    <div className="flex py-52">
      <div className="flex items-center justify-center w-full text-center">
        <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-2xl px-10">
          <div className="p-10">
            <h1 className="font-bold text-2xl">Transaksi Success</h1>
          </div>
          <div className="items-center justify-center border-2 w-full border-black inline-block mb-2"></div>
          <div className="flex justify-around py-2">
            <div>
              <h1 className="py-2 font-bold">Index</h1>
              <h2>1</h2>
            </div>
            <div>
              <h1 className="py-2 font-bold">Nama Barang</h1>
              <h2>Discord bot music</h2>
            </div>
            <div>
              <h1 className="py-2 font-bold">Harga Barang</h1>
              <h2>Rp. 100.000</h2>
            </div>
          </div>
          <div className="items-center justify-center border-2 w-full border-black inline-block mt-2"></div>

          <div className="w-full h-24 z-[100] py-5">
            <div className="flex justify-center items-center py-2">
              <Link
                href={"/home"}
                className="flex bg-white text-black active:bg-red-500 hover:bg-red-500 justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
              >
                Close
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
