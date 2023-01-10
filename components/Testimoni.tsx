import Image from "next/image";
import { Chunk, GetImage } from "../config";
import { DataMember } from "../typings";

const ResultData = () => {
  const data = [
    {
      name: "Unknown",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos rem voluptas necessitatibus autem! Eum nihil ut officiis voluptas assumenda, laudantium fugit iusto harum. Optio explicabo assumenda porro quisquam debitis?",
      image: "",
    },
    {
      name: "Unknown",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos rem voluptas necessitatibus autem! Eum nihil ut officiis voluptas assumenda, laudantium fugit iusto harum. Optio explicabo assumenda porro quisquam debitis?",
      image: "",
    },
  ];

  return data.map(({ name, image, description }, index) => {
    if (!image)
      image =
        "https://cdn.discordapp.com/attachments/1061967634846978088/1062321083920961606/person-icon.png";

    const getImage = GetImage(image);

    const images = (
      <Image
        loader={getImage.loader}
        className="rounded-full h-[128px] w-[128px] object-cover md:object-top"
        src={getImage.image}
        alt={`${name} image`}
        width={128}
        height={128}
      />
    );

    return (
      <div className="flex mb-[16px] p-[8px] justify-center" key={index}>
        <div className="shadow hover:shadow-2xl outline-none focus:outline-none">
          <div className="py-3 mr-auto ml-auto w-[50%]">{images}</div>
          <div className="item-center text-center w-[17rem] p-[2rem]">
            <div className="py-1 px-2">
              <h2>{name}</h2>
              <div className="py-[1rem]">{description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default function Testimoni() {
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
        <h1>Testimoni</h1>
      </div>
      {...result}
    </div>
  );
}
