import { Express } from "express";
import { clientRoutes } from "./client.routes";
import { loginRoutes } from "./login.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/login", loginRoutes());
  app.use("/users", userRoutes());
  app.use("/clients", clientRoutes());
};
