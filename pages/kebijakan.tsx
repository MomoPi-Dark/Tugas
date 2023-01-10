import KebijakanPrivasiComponent from "../components/KebijakanPrivasi";
import Layout from "../layout/Layout";

export default function Page() {
  return (
    <Layout nameTitle="Kebijakan Privasi" userInterface={true}>
      <KebijakanPrivasiComponent />
    </Layout>
  );
}
