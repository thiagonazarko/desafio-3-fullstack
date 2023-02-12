import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  getClientController,
  updateClientController,
} from "../controllers/client/index.controller";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";

export const clientRouter = Router();

clientRouter.post(
  "/:id_client",
  verifyAuthTokenMiddleware,
  createClientController
);
clientRouter.get("", verifyAuthTokenMiddleware, getClientController);
clientRouter.delete("/:id", verifyAuthTokenMiddleware, deleteClientController);
clientRouter.patch("/:id", verifyAuthTokenMiddleware, updateClientController);
