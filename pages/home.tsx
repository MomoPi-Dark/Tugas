import HomeComponent from "../components/Home";
import Layout from "../layout/Layout";

export default function Page() {
  return (
    <Layout nameTitle="Home" userInterface={true}>
      <HomeComponent />
    </Layout>
  );
}
