import VisiMisiComponent from "../components/VisiMisi";
import Layout from "../layout/Layout";

export default function Page() {
  return (
    <Layout nameTitle="Visi Misi" userInterface={true}>
      <VisiMisiComponent />
    </Layout>
  );
}
