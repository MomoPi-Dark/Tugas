import Link from "next/link";
import { Button } from "reactstrap";

function HomePayment({
  setShowModal,
  showDig,
}: {
  setShowModal: any;
  showDig: any;
  showModal: any;
}) {
  return (
    <div className={`flex flex-col items-center w-full px-20 py-20`}>
      <div className="flex flex-col mb-[16px] p-2">
        <div className="flex shadow-2xl rounded-2xl">
          <div className="w-[30rem] p-[20px]">
            <h1 className="font-bold text-lg">List Pembelian</h1>
            <div className="items-center justify-center border-2 w-full border-black inline-block"></div>
            <div className="py-2">
              <div className="flex px-2 justify-between">
                <h1 className="font-bold">Discord bot music</h1>
                <h2>Rp. 100.000</h2>
              </div>
            </div>
            <div className="items-center justify-center border-2 w-full border-black inline-block mb-2"></div>
            <div className="py-14 p-2">
              <h1>Pilih Metode pembayaran</h1>
              <div className="py-2">
                <Button
                  className="bg-white text-black active:bg-white hover:bg-white justify-center items-center font-bold px-2 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
                  onClick={() => setShowModal(true)}
                >
                  {showDig}
                </Button>
              </div>
            </div>
            <div className="items-center justify-center border-2 w-full border-black inline-block mb-2"></div>
            <div className="p-2 justify-between flex">
              <h1 className="font-bold">TOTAL</h1>
              <h1>Rp. 100.000</h1>
            </div>
            <div className="flex justify-evenly py-2">
              <div className="flex items-center w-full h-full pr-2 ">
                <Link
                  href={"/listharga"}
                  className="flex bg-grey-400 text-black active:bg-white hover:bg-white justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
                >
                  Back
                </Link>
              </div>
              <div className="flex justify-end items-center w-full h-full pr-2 ">
                <Link
                  href={"/invoice"}
                  className="flex bg-grey-400 text-black active:bg-white hover:bg-white justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
                >
                  <Button>Submit</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePayment;
