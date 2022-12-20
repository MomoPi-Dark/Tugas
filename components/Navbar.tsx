import Image from "next/image";
import Link from "next/link";
import image1 from "../public/assets/dc.jpg";

export default function Navbar() {
  return (
    <div className="w-full h-20 z-[100] fixed">
      <div className="flex justify-between items-center w-full h-full pr-2 2xl:px-16">
        <Link href="/">
          <Image src={image1} width={60} alt={"❤"} className="rounded-full" />
        </Link>

        <div>
          <ul className="hidden md:flex">
            <li className="ml-10">
              <Link href="/" className="text-xl hover:border-b">
                Beranda
              </Link>
            </li>
            <li className="ml-10">
              <Link href="/team" className="text-xl hover:border-b">
                Team Kami
              </Link>
            </li>
            <li className="ml-14">
              <Link href="/login" className="text-xl hover:border-b">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
