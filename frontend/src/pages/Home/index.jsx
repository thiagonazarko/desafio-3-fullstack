import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../../components/Button/style";
import { CardsClients } from "../../components/Cards";
import { UserContext } from "../../providers/Users";

import { Title } from "../../styles/Typography";
import { ContainerHome, ContainerUl, NamesDiv } from "./style";

export const HomePage = () => {
  const { user, exitUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <ContainerHome>
        <Title tag="h1" titleSize="title1" color="var(--white)">
          {user.full_name}
        </Title>
        <div>
          <ButtonStyled
            backgroundcolor="var(--blue)"
            width="30%"
            padding=".3rem"
            type="submit"
            hover="var(--wine)"
            color="var(--white)"
            hovercolor="var(--pink)"
            onClick={() => navigate("/home/client")}
          >
            Contato +
          </ButtonStyled>

          <ButtonStyled
            backgroundcolor="var(--blue)"
            width="30%"
            padding=".3rem"
            type="submit"
            hover="var(--wine)"
            color="var(--white)"
            hovercolor="var(--pink)"
            onClick={() => exitUser()}
          >
            Sair
          </ButtonStyled>
        </div>
      </ContainerHome>

      <NamesDiv>
        <div>
          <Title tag="h2" titleSize="title2">
            Nome
          </Title>
          <Title tag="h2" titleSize="title2">
            E-mail
          </Title>
          <Title tag="h2" titleSize="title2">
            Telefone
          </Title>
        </div>
      </NamesDiv>

      <ContainerUl>
        <CardsClients />
      </ContainerUl>
    </>
  );
};
