import { Request, Response } from "express";
import { loginUserService } from "../../services/login/loginUser.service";

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const token = await loginUserService(req.body);

    return res.status(200).send({ token: token });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(403).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
