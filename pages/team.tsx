import TeamKamiComponent from "../components/TeamKami";
import Layout from "../layout/Layout";

export default function Page() {
  return (
    <Layout nameTitle="Team Kami" userInterface={true}>
      <TeamKamiComponent />
    </Layout>
  );
}
