import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input/style";
import { StyledForm } from "../../styles/Form";
import { ButtonStyled } from "../Button/style";
import { Title } from "../../styles/Typography";
import { useContext } from "react";
import { UserContext } from "../../providers/Users";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const { loginUser } = useContext(UserContext);
  const onSubmit = async (data_user) => {
    await loginUser(data_user);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Username"
        placeholder="Username"
        type="text"
        register={register}
        name="username"
        error={errors?.username?.message}
      />

      <Input
        label="Senha"
        placeholder="Senha"
        color="var(--pink)"
        type="password"
        register={register}
        name="password"
        error={errors?.password?.message}
      />
      <ButtonStyled
        backgroundcolor="var(--wine)"
        width="90%"
        padding=".3rem"
        type="submit"
        hover="var(--pink)"
        color="var(--pink)"
        hovercolor="var(--wine)"
      >
        Entrar
      </ButtonStyled>
      <Title tag="p" titleSize="headline" color="var(--white)" padding=".1rem">
        Ainda não possui uma conta?
      </Title>
      <ButtonStyled
        backgroundcolor="var(--wine)"
        width="90%"
        padding=".3rem"
        type="submit"
        hover="var(--pink)"
        color="var(--pink)"
        hovercolor="var(--wine)"
        onClick={() => navigate("/register")}
      >
        Cadastre-se
      </ButtonStyled>
    </StyledForm>
  );
};
