import Invoice from "../components/Pembayaran/Invoice";
import Layout from "../layout/Layout";

export default function Page() {
  return (
    <Layout nameTitle="Invoice" noFooter={true} noNavbar={true}>
      <Invoice />
    </Layout>
  );
}
