import TanggungJawabKami from "../components/TanggungJawabKami";
import Layout from "../layout/Layout";

export default function Page() {
  return (
    <Layout nameTitle="Invoice" userInterface={true}>
      <TanggungJawabKami />
    </Layout>
  );
}
