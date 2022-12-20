import LoginComponent from "../components/Login";
import HeadTitle from "./HeadTitle";

export default function Login() {
  return <HeadTitle component={<LoginComponent />} nameTitle={"Login"} />;
}
