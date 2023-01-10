import Link from "next/link";
import { useState } from "react";
import HomePayment from "./Index";
import PaymentChoice from "./PilihPembayaran";

function PembayaranComponent() {
  const [showModal, setShowModal] = useState(false);
  const [showDig, setDig] = useState("Pembayaran");

  return (
    <div className="p-2 w-screen h-screen">
      <div className="flex w-full h-24 z-[100]">
        <div className="flex justify-between items-center w-full h-full pr-2 2xl:px-16">
          <Link
            href={"/home"}
            className="flex bg-grey-400 text-black active:bg-white hover:bg-white justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          >
            Back
          </Link>
        </div>
      </div>

      {showModal ? (
        <PaymentChoice setShowModal={setShowModal} setDig={setDig} />
      ) : (
        <HomePayment
          setShowModal={setShowModal}
          showModal={showModal}
          showDig={showDig}
        />
      )}
    </div>
  );
}

export default PembayaranComponent;
