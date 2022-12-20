import HomeComponent from "../components/Home";
import HeadTitle from "./HeadTitle";

export default function Home() {
  return <HeadTitle component={<HomeComponent />} nameTitle={"Home"} />;
}
