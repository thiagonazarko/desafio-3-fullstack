import { FormRegister } from "../../components/FormRegister";
import { ContainerPages } from "../../styles/GlobalStyle";
import { Title } from "../../styles/Typography";

export const RegisterPage = () => {
  return (
    <ContainerPages>
      <Title tag="h1" titleSize="title1">
        Cadastre-se
      </Title>
      <FormRegister />
    </ContainerPages>
  );
};
