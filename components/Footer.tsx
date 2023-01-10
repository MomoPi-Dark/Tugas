import Link from "next/link";

export default function Footer() {
  const link = "https://discord.gg/Qf7uD6cV";

  return (
    <div className="bg-transparent ">
      <div className="py-[2rem] text-center ">
        <div className="flex-none md:flex justify-between 2xl:px-32">
          <div>
            <h1 className="justify-center text-center text-xl">
              <b>Layanan Kami</b>
            </h1>
            <div className="py-3">
              <ul className="justify-center text-center text-xl">
                <Link href="/panduan">Panduan Pemakaian</Link>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="justify-center text-center text-xl">
              <b>Tentang Kami</b>
            </h1>
            <div className="py-3">
              <ul className="justify-center text-center text-xl">
                <Link href="/tanggungjawab">Tanggung Jawab Kami</Link>
              </ul>
              <ul className="justify-center text-center text-xl">
                <Link href="/kebijakan">Kebijakan Privasi</Link>
              </ul>
              <ul className="justify-center text-center text-xl">
                <Link href="/visimisi">Visi Misi</Link>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="justify-center text-center text-xl">
              <b>Hubungi Kami</b>
            </h1>
            <div className="py-3">
              <ul className="justify-center text-center text-xl">
                <Link href={"/"}>Discord</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
