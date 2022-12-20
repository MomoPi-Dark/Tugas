import VisiMisiComponent from "../components/VisiMisi";
import HeadTitle from "./HeadTitle";

export default function Page() {
  return (
    <HeadTitle component={<VisiMisiComponent />} nameTitle={"Visi Misi"} />
  );
}
