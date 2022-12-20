import Image from "next/image";
import imag1 from "../public/assets/dc.jpg";

export default function TeamKamiComponent() {
  return (
    <div className="py-28 px-10 flex justify-center">
      <div className="column">
        <div className="card items-center justify-center text-center solid">
          <Image className="rounded-full" src={imag1} width={100} alt="Jane" />
          <div className="container h-auto w-[17rem] p-[16px] after:table after:clear-both">
            <h2>Gilang</h2>
            <p className="title text-gray-500">Turu</p>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              assumenda similique maiores quibusdam autem dolore sunt quas
              pariatur quo, itaque aperiam et perspiciatis dolorem sapiente
              necessitatibus impedit doloremque, enim non.
            </p>

            <button className="button border-none outline-0 inline-block p-[8px] text-white bg-gray-600 text-center cursor-pointer w-[100%]">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
