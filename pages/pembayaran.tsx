import PembayaranComponent from "../components/Pembayaran/Pembayaran";
import Layout from "../layout/Layout";

export default function Pembayaran() {
  return (
    <Layout
      nameTitle="Pembayaran"
      noFooter={true}
      noNavbar={true}
      userInterface={true}
    >
      <PembayaranComponent />
    </Layout>
  );
}
