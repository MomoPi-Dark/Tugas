import Image from "next/image";
import imag1 from "../public/assets/dc.jpg";

export default function TeamKamiComponent() {
  return (
    <div className="row py-28 px-10 flex justify-center">
      <div className="column float-left mb-[16px] p-[8px]">
        <div className="card items-center justify-between text-center solid shadow-xl border-x-[1px] border-y-[1px] ">
          <Image
            className="rounded-full"
            src={imag1}
            width={100}
            alt="Gilang"
          />
          <div className="container h-auto w-[17rem] p-[20px] after:table after:clear-both">
            <div className="py-4 px-2">
              <h2>Gilang</h2>
              <p className="title text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                rerum quam praesentium blanditiis aperiam cum voluptates.
                Exercitationem cupiditate eligendi deserunt, voluptate quibusdam
                tenetur alias vitae explicabo illo assumenda quaerat. Est.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
