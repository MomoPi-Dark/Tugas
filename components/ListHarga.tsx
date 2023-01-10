import Link from "next/link";
import { Button } from "reactstrap";

export default function ListHarga() {
  return (
    <div>
      <div className="flex w-full h-24 z-[100]">
        <div className="flex justify-between items-center w-full h-full pr-2 2xl:px-16">
          <Link
            href={"/home"}
            className="flex bg-white text-black active:bg-white hover:bg-white justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          >
            Back
          </Link>
        </div>
      </div>
      <div className="flex py-52">
        <div className="flex items-center justify-center w-full text-center">
          <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-2xl">
            <div className="p-10">
              <h1 className="font-bold text-2xl">List Bot</h1>
            </div>
            <div className="flex justify-around p-2">
              <div>
                <h1 className="h-10 font-bold">Nama Barang</h1>
                <h2>Discord bot music</h2>
              </div>
              <div>
                <h1 className="h-10 font-bold">Harga Barang</h1>
                <h2>Rp. 100.000</h2>
              </div>
              <div>
                <div className="h-10 font-bold">Cart (0)</div>
                <Button>Add to cart</Button>
              </div>
            </div>
            <div className="w-full h-24 z-[100] py-5">
              <div className="flex justify-center items-center py-2">
                <Link
                  href={"/pembayaran"}
                  className="flex bg-white text-black active:bg-white hover:bg-white justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
