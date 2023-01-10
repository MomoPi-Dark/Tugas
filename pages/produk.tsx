import ProdukKamiComponents from "../components/ProdukKami";
import Layout from "../layout/Layout";

export default function Page() {
  return (
    <Layout nameTitle="Produk Kami" userInterface={true}>
      <ProdukKamiComponents />
    </Layout>
  );
}
