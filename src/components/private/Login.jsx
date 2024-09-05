import LoginPage from "../../pages/private/LoginPage";

function Login() {
  return <LoginPage route="/api/token/" method="login" />;
}

export default Login;
