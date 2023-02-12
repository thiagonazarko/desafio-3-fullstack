import { StyledForm } from "../../styles/Form";
import { Input } from "../Input/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonStyled } from "../Button/style";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ClientContext } from "../../providers/Clients";

export const FormRegisterClient = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
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

  const { postClient } = useContext(ClientContext);

  const onSubmit = async (data_client) => {
    data_client["contacts"] = [
      { email: data_client.email, telephone: data_client.telephone },
    ];
    delete data_client.email;
    delete data_client.telephone;

    postClient(data_client);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nome completo"
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
        Registrar Contato
      </ButtonStyled>

      <ButtonStyled
        backgroundcolor="var(--wine)"
        width="90%"
        padding=".3rem"
        type="submit"
        hover="var(--pink)"
        color="var(--pink)"
        hovercolor="var(--wine)"
        onClick={() => navigate("/home")}
      >
        Voltar
      </ButtonStyled>
    </StyledForm>
  );
};
