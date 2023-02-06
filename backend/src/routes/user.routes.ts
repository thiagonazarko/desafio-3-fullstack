import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userListController from "../controllers/users/userList.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";
import isOwnerMiddleware from "../middlewares/isOwner.middleware";
import userAuthTokenMiddleware from "../middlewares/userAuthToken.middleware";
import {
  userCreateSchema,
  userCreateValidated,
} from "../middlewares/userCreateValidated.middleware";
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post(
    "",
    verifyEmailMiddleware,
    userCreateValidated(userCreateSchema),
    userCreateController
  );
  routes.get("", userAuthTokenMiddleware, userListController);
  routes.patch(
    "/:id",
    userAuthTokenMiddleware,
    isOwnerMiddleware,
    userUpdateController
  );
  routes.delete(
    "/:id",
    userAuthTokenMiddleware,
    isOwnerMiddleware,
    userDeleteController
  );

  return routes;
};
