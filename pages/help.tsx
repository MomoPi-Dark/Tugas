import Help from "../components/Help";
import Layout from "../layout/Layout";

export default function Page() {
  return (
    <Layout nameTitle="Help" noFooter={true}>
      <Help />
    </Layout>
  );
}
