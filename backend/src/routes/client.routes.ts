import { Router } from "express";
import { createClientController } from "../controllers/client/createClient.controller";
import { deleteClientController } from "../controllers/client/deleteClient.controller";
import { getClientController } from "../controllers/client/getClient.controller";
import { updateClientController } from "../controllers/client/updateClient.controller";
import userAuthTokenMiddleware from "../middlewares/userAuthToken.middleware";

const routes = Router();

export const clientRoutes = () => {
  routes.post("/:id_client", userAuthTokenMiddleware, createClientController);
  routes.get("", userAuthTokenMiddleware, getClientController);
  routes.delete("/:id", userAuthTokenMiddleware, deleteClientController);
  routes.patch("/:id", userAuthTokenMiddleware, updateClientController);

  return routes;
};
