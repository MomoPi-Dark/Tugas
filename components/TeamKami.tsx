import Image from "next/image";
import { Chunk, GetImage } from "../config";
import { DataMember } from "../typings";

const ResultData = () => {
  const data = [
    {
      name: "Iqbal",
      image:
        "https://cdn.discordapp.com/attachments/1061967634846978088/1062320647713337404/-YUw_K7P_400x400.jpg",
      description: ["Aku gini sukanya tidur"],
      role: "CEO",
    },
    {
      name: "Gilang",
      image:
        "https://cdn.discordapp.com/attachments/1061967634846978088/1061967675917598728/c846f4c6-32e6-48fb-a893-02eea18f8ce3.png",
      description: "Dia adalah babu yang di babukan oleh babu",
      role: "CEO",
    },
    {
      name: "Ramdhani",
      image:
        "https://cdn.discordapp.com/attachments/1061967634846978088/1061969645785055294/43572_300.png",
      description: "Giga Ram",
      role: "CEO",
    },
    {
      name: "Ardi",
      image:
        "https://cdn.discordapp.com/attachments/1061967634846978088/1062019567184007239/268055829_1339210130174119_6460630360296515705_n.png",
      description: "Dia orang penyayang",
      role: "CEO",
    },
    {
      name: "Irfan",
      description: "Dia orang nya mirip saya",
      role: "CEO",
    },
  ] as DataMember[];

  return data.map(({ name, image, description, role }, index) => {
    if (!image)
      image =
        "https://cdn.discordapp.com/attachments/1061967634846978088/1062321083920961606/person-icon.png";

    const getImage = GetImage(image);

    const des =
      description instanceof Array ? (
        description.map((x, index) => (
          <p className="text-gray-500" key={index}>
            {x}
          </p>
        ))
      ) : (
        <p className="text-gray-500">{description}</p>
      );

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
              <div className="py-[1rem]">{des}</div>
              <div className="text-center py-[1rem]">
                <h3>{role}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default function TeamKamiComponent() {
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
        <h1>Team Kami</h1>
      </div>
      <p>
        Kami telah melayani lebih dari 2000 orang yang ingin membuat bot /
        website
      </p>
      {...result}
    </div>
  );
}
