import { Request, Response } from "express";
import loginService from "../../services/login/login.service";

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await loginService({ email, password });

  return res.status(200).send({ token });
};

export default loginController;
