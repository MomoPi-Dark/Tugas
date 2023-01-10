import PanduanPemakaian from "../components/PanduanPemakaian";
import Layout from "../layout/Layout";

export default function Page() {
  return (
    <Layout nameTitle="Panduan Pemakaian" userInterface={true}>
      <PanduanPemakaian />
    </Layout>
  );
}
