import Image from "next/image";
import { Button } from "reactstrap";
import { Chunk, GetImage } from "../config";

const ResultData = () => {
  const data = [
    {
      title: "Berita 1",
      image: "",
      isi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure odio porro, deserunt quasi sequi fugit officia nesciunt! Accusantium in saepe quod, eaque assumenda explicabo laudantium ea perferendis alias fuga.",
    },
    {
      title: "Berita 2",
      image: "",
      isi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure odio porro, deserunt quasi sequi fugit officia nesciunt! Accusantium in saepe quod, eaque assumenda explicabo laudantium ea perferendis alias fuga.",
    },
    {
      title: "Berita 3",
      image: "",
      isi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure odio porro, deserunt quasi sequi fugit officia nesciunt! Accusantium in saepe quod, eaque assumenda explicabo laudantium ea perferendis alias fuga.",
    },
    {
      title: "Berita 4",
      image: "",
      isi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure odio porro, deserunt quasi sequi fugit officia nesciunt! Accusantium in saepe quod, eaque assumenda explicabo laudantium ea perferendis alias fuga.",
    },
    {
      title: "Berita 5",
      image: "",
      isi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure odio porro, deserunt quasi sequi fugit officia nesciunt! Accusantium in saepe quod, eaque assumenda explicabo laudantium ea perferendis alias fuga.",
    },
  ];

  return data.map(({ title, image, isi }, index) => {
    if (!image)
      image =
        "https://cdn.discordapp.com/attachments/1061967634846978088/1062321083920961606/person-icon.png";

    const getImage = GetImage(image);

    return (
      <div className="flex p-[8px] py-7 justify-center" key={index}>
        <div className="shadow hover:shadow-2xl outline-none focus:outline-none">
          <div className="item-center text-center p-[2rem]">
            <div className="py-1 px-2">
              <h2>{title}</h2>
              <div className="py-[1rem]">
                {" "}
                <p className="text-gray-500">{isi}</p>
              </div>
              <Button>
                <h1 className="font-bold text-gray-500 mt-2">More</h1>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default function BeritaComponent() {
  const chunk = new Chunk();
  const data = ResultData();
  const result = chunk.create(
    data,
    (x) => {
      return (
        <div className="flex-none md:flex justify-evenly items-center">{x}</div>
      );
    },
    2
  );

  return (
    <div className="flex-none md:flex-1 items-center justify-center w-full px-20 text-center py-20">
      <div className="font-bold text-3xl py-3">
        <h1>Berita Seputar Coding</h1>
      </div>

      {...result}
    </div>
  );
}
