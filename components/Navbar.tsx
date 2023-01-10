import Image from "next/image";
import Link from "next/link";
import image1 from "../public/assets/dc.jpg";

export function NavbarUser() {
  return (
    <div className="flex w-full h-24 z-[100]">
      <div className="flex justify-between items-center w-full h-full pr-2 2xl:px-16">
        <Link href="/home">
          <Image src={image1} width={60} alt={"❤"} className="rounded-full" />
        </Link>

        <div className="justify-between">
          <ul className="hidden md:flex">
            <li className="ml-10">
              <Link href="/home" className="text-lg hover:border-b">
                Beranda
              </Link>
            </li>
            <li className="ml-10">
              <Link href="/berita" className="text-lg hover:border-b">
                Berita
              </Link>
            </li>
            <li className="ml-10">
              <Link href="/produk" className="text-lg hover:border-b">
                Produk Kami
              </Link>
            </li>{" "}
            <li className="ml-10">
              <Link href="/team" className="text-lg hover:border-b">
                Team Kami
              </Link>
            </li>
            <li className="ml-14">
              <Link href="/" className="text-lg hover:border-b">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
