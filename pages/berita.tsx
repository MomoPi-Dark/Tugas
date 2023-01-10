import Berita from "../components/Berita";
import Layout from "../layout/Layout";

export default function Page() {
  return (
    <Layout nameTitle="Berita" userInterface={true}>
      <Berita />
    </Layout>
  );
}
