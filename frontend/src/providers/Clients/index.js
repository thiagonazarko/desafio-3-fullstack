import { createContext, useContext } from "react";
import { api } from "../../services/Api";
import { UserContext } from "../Users";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const { user, userToken, getUser } = useContext(UserContext);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };
  const postClient = (client_data) => {
    api
      .post(`/clients/${user.id}`, client_data, config)
      .then((res) => {
        console.log(res);
        getUser();
      })
      .catch((err) => console.log(err));
  };

  const deleteClient = (client_id) => {
    api
      .delete(`/clients/${client_id}`, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ClientContext.Provider value={{ postClient, deleteClient }}>
      {children}
    </ClientContext.Provider>
  );
};
