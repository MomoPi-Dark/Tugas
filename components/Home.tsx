import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GetImage } from "../config";

const Slideshow = () => {
  const images = [
    "https://cdn.discordapp.com/attachments/1061967634846978088/1062021059991314532/image.png",
    "https://cdn.discordapp.com/attachments/1061967634846978088/1062040692261666816/image.png",
  ];

  const If = images.length <= 1 ? false : true;
  return (
    <div className="mx-72 my-14">
      <div>
        <Slide
          indicators={If}
          canSwipe={false}
          autoplay={If}
          pauseOnHover={If}
          duration={1000 * 8}
          arrows={If}
        >
          {images.map((x, index) => {
            const myLoader = GetImage(x);

            return (
              <div key={index} className="flex justify-center w-full h-full">
                <Image
                  loader={myLoader.loader}
                  src={myLoader.image}
                  className="object-contain rounded-3xl"
                  alt={`${x}/${index}`}
                  width="800"
                  height="800"
                />
              </div>
            );
          })}
        </Slide>
      </div>
      <div className="text-center justify-center py-52">
        <h1 className="font-bold text-3xl">
          JIKA ANDA TERTARIK SILAHKAN KLIK DIBAWAH INI
        </h1>
        <div className="p-2 text-center justify-center">
          <div className="flex w-full h-24 z-[100]">
            <div className="flex justify-center items-center w-full h-full">
              <Link
                href={"/produk"}
                className="flex bg-white text-black active:bg-white hover:bg-white justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
              >
                BELI SEKARANG!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="py-20">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Produk Terbaru Kami</h1>
      </div>
      <Slideshow />
    </div>
  );
}
