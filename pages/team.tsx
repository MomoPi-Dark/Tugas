import TeamKamiComponent from "../components/TeamKami";
import HeadTitle from "./HeadTitle";

export default function Page() {
  return (
    <HeadTitle component={<TeamKamiComponent />} nameTitle={"Produk Kami"} />
  );
}
