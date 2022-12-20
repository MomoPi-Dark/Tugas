import KebijakanPrivasiComponent from "../components/KebijakanPrivasi";
import HeadTitle from "./HeadTitle";

export default function KebijakanPrivasi() {
  return (
    <HeadTitle
      component={<KebijakanPrivasiComponent />}
      nameTitle={"Kebijakan Privasi"}
    />
  );
}
