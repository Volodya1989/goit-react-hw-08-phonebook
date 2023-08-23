import { Helmet } from "react-helmet";
import { Container, LoginFormStyled } from "components/App/App.styled";

import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginFormStyled>
        <LoginForm />
      </LoginFormStyled>
    </Container>
  );
}
