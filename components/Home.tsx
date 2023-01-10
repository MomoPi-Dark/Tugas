import Image from "next/image";
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
    <div className="px-72 py-14">
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
                  className="object-contain"
                  alt={`${x}/${index}`}
                  width="800"
                  height="800"
                />
              </div>
            );
          })}
        </Slide>
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
