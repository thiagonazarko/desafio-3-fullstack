import { createContext, useState } from "react";
import { api } from "../../services/Api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@userData")) || ""
  );
  const [userToken, setUserToken] = useState(
    JSON.parse(localStorage.getItem("@userToken")) || ""
  );

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const loginUser = (user_data) => {
    api
      .post("/login", user_data)
      .then((res) => {
        getUser(res.data.token);
        setUserToken(res.data.token);
        localStorage.setItem("@userToken", JSON.stringify(res.data.token));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUser = (data_token) => {
    const configGet = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data_token}`,
      },
    };
    api
      .get("/users", configGet)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("@userData", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  };

  const postUser = (client_data) => {
    api
      .post("/users", client_data)
      .then((res) => {
        console.log(res);
        getUser();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (client_id) => {
    api
      .delete(`/users/${client_id}`, config)
      .then((res) => {
        getUser();
      })
      .catch((err) => console.log(err));
  };

  const exitUser = () => {
    setUserToken("");
    localStorage.removeItem("@userToken");
    setUser("");
    localStorage.removeItem("@userData");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userToken,
        getUser,
        postUser,
        deleteUser,
        loginUser,
        exitUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
