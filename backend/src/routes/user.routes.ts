import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  updateUserController,
} from "../controllers/user/index.controller";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { verifyUsernameMiddleware } from "../middlewares/verifyUsername.middleware";

export const userRouter = Router();

userRouter.post("", verifyUsernameMiddleware, createUserController);
userRouter.get("", verifyAuthTokenMiddleware, getUserController);
userRouter.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);
userRouter.patch("/:id", verifyAuthTokenMiddleware, updateUserController);
