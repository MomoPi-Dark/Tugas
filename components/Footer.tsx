import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-auto m-auto bg-slate-500 block">
      <div className="justify-between items-center py-[2rem] w-full h-full pr-2 2xl:px-16">
        <div className="flex justify-between text-justify p-3">
          <div>
            <h1 className="justify-center text-center text-xl">
              <b>Layanan Kami</b>
            </h1>
            <div className="py-3">
              <ul className="justify-center text-center text-xl">
                Panduan Pemakaian
              </ul>
            </div>
          </div>
          <div>
            <h1 className="justify-center text-center text-xl">
              <b>Tentang Kami</b>
            </h1>
            <div className="py-3">
              <ul className="justify-center text-center text-xl">
                Tanggung Jawab Kami
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
              <ul className="justify-center text-center text-xl">Whatsapp</ul>
              <ul className="justify-center text-center text-xl">Instagram</ul>
              <ul className="justify-center text-center text-xl">Discord</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
