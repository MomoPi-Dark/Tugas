import Head from "next/head";
import Footer from "../components/Footer";
import { NavbarUser } from "../components/Navbar";

interface Layout {
  children: React.ReactNode;
  nameTitle: string;
  noFooter?: boolean;
  noNavbar?: boolean;
}

export default function Layout({
  children,
  nameTitle,
  noFooter = false,
  noNavbar = false,
}: Layout) {
  const Footers = noFooter ? null : <Footer />;
  const Navbars = noNavbar ? null : <NavbarUser />;

  return (
    <div>
      <Head>
        <title>{nameTitle}</title>
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.discordapp.com/attachments/1061967634846978088/1062321083920961606/person-icon.png"
        />
      </Head>
      <main>
        {Navbars}
        <div className="min-h-screen p-2">{children}</div>
        {Footers}
      </main>
    </div>
  );
}
