import Image from "next/image";
import Link from "next/link";
import { Chunk, GetImage } from "../config";
import { DataProduk } from "../typings";

const ResultData = () => {
  const data = [
    {
      name: "Discord Bot",
      description: ["Discord bot music", "Discord bot welcome"],
      image:
        "https://cdn.discordapp.com/attachments/1010609961887334421/1060956495157669958/Discord_neon_icon.jpg",
    },
  ] as DataProduk[];

  return data.map(({ name, image, description }, index) => {
    const getImage = GetImage(image);
    const des =
      description instanceof Array ? (
        description.map((x, index) => (
          <p className="text-gray-500" key={`${x}/${index}`}>
            {x}
          </p>
        ))
      ) : (
        <p className="text-gray-500">{description}</p>
      );

    return (
      <div className="flex mb-[16px] p-[8px]" key={`${name} ${index}`}>
        <div className="shadow hover:shadow-2xl outline-none focus:outline-none">
          <div className="text-center w-[17rem] p-[20px]">
            <div className="py-3 mr-auto ml-auto w-[50%]">
              <Image
                className="rounded-full"
                loader={getImage.loader}
                src={getImage.image}
                alt={`${name} image`}
                width="500"
                height="500"
              />
            </div>
            <div className="py-4 px-2">
              <h2>{name}</h2>
              <div className="py-[1rem]">{des}</div>
              <div>
                <div>
                  <div className="p-2 text-center justify-center">
                    <div className="flex w-full z-[100]">
                      <div className="flex justify-center items-center w-full h-full">
                        <Link
                          href={"/listharga"}
                          className="flex bg-white text-black active:bg-white hover:bg-white justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
                        >
                          Order
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 text-center justify-center">
                    <div className="flex w-full z-[100]">
                      <div className="flex justify-center items-center w-full h-full">
                        <Link
                          href={"/testimoni"}
                          className="flex bg-white text-black active:bg-white hover:bg-white justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
                        >
                          Testimoni
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default function ProdukKamiComponents() {
  const chunk = new Chunk();
  const data = ResultData();
  const result = chunk.create(
    data,
    (x) => {
      return (
        <div className="flex-none md:flex justify-center py-7 items-center">
          {x}
        </div>
      );
    },
    3
  );

  return (
    <div className="flex-none md:flex-1 items-center justify-center w-full px-20 text-center py-20">
      <div className="font-bold text-3xl py-3">
        <h1>Product Kami</h1>
      </div>
      {...result}
    </div>
  );
}
