import { FormLogin } from "../../components/FormLogin";
import { ContainerPages } from "../../styles/GlobalStyle";
import { Title } from "../../styles/Typography";

export const LoginPage = () => {
  return (
    <ContainerPages>
      <Title tag="h1" titleSize="title1">
        Login
      </Title>
      <FormLogin />
    </ContainerPages>
  );
};
