import { Helmet } from "react-helmet";
import { Container, RegisterFormStyled } from "components/App/App.styled";

import RegisterForm from "components/RegisterForm/RegisterForm";

export default function Register() {
    return (
      <Container>
        <Helmet>
          <title>Registration</title>
        </Helmet>

        <RegisterFormStyled>
          <RegisterForm />
        </RegisterFormStyled>
      </Container>
    );
}
