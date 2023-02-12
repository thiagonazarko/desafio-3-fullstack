import { StyledForm } from "../../styles/Form";
import { Input } from "../Input/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonStyled } from "../Button/style";
import { useContext } from "react";
import { UserContext } from "../../providers/Users";
import { useNavigate } from "react-router-dom";

export const FormRegister = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    full_name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Insira um endereço de e-mail válido"),
    telephone: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const { postUser } = useContext(UserContext);
  const onSubmit = async (data_user) => {
    data_user["contacts"] = [
      { email: data_user.email, telephone: data_user.telephone },
    ];
    delete data_user.email;
    delete data_user.telephone;
    postUser(data_user);
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
        type="password"
        register={register}
        name="password"
        error={errors?.password?.message}
      />
      <Input
        label="Nome Completo"
        placeholder="Ex: João Silva"
        type="text"
        register={register}
        name="full_name"
        error={errors?.full_name?.message}
      />

      <Input
        label="E-mail"
        placeholder="Ex: joao@teste.com.br"
        type="text"
        register={register}
        name="email"
        error={errors?.email?.message}
        
      />

      <Input
        label="Telefone"
        placeholder="Ex: 99999-9999"
        type="text"
        register={register}
        name="telephone"
        error={errors?.telephone?.message}
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
        Cadastrar
      </ButtonStyled>

      <ButtonStyled
        backgroundcolor="var(--wine)"
        width="90%"
        padding=".3rem"
        type="submit"
        hover="var(--pink)"
        color="var(--pink)"
        hovercolor="var(--wine)"
        onClick={() => navigate("/")}
      >
        Voltar
      </ButtonStyled>
    </StyledForm>
  );
};
