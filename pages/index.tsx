import LoginComponent from "../components/Login";
import Layout from "../layout/Layout";

export default function LoginGuest() {
  return (
    <Layout nameTitle="Login" noFooter={true} noNavbar={true}>
      <LoginComponent />
    </Layout>
  );
}
