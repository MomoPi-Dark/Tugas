import ListHarga from "../components/Pembayaran/ListHarga";
import Layout from "../layout/Layout";

export default function Page() {
  return (
    <Layout nameTitle="List Harga" noFooter={true} noNavbar={true}>
      <ListHarga />
    </Layout>
  );
}
