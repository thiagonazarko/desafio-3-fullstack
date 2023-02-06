import { Router } from "express";
import loginController from "../controllers/login/login.controller";

const router = Router();

export const loginRoutes = () => {
  router.post("/", loginController);

  return router;
};
