import express from "express";
import { userRouter } from "./routes/user.routes";
import { clientRouter } from "./routes/client.routes";
import { loginRouter } from "./routes/login.routes";
import cors from "cors";

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/users", userRouter);
app.use("/clients", clientRouter);
app.use("/login", loginRouter);

export default app;
