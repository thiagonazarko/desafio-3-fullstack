import { useContext } from "react";
import { UserContext } from "../../providers/Users";
import { Title } from "../../styles/Typography";

export const CardsClients = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      {user?.client?.map(({ id, full_name, contact }) => {
        return (
          <li id={id}>
            <Title tag="h3" titleSize="title3">
              {full_name}
            </Title>
            {contact.map(({ email, telephone }) => {
              return (
                <>
                  <Title tag="h3" titleSize="title3">
                    {email}
                  </Title>
                  <Title tag="h3" titleSize="title3">
                    {telephone}
                  </Title>
                </>
              );
            })}
          </li>
        );
      })}
    </>
  );
};
