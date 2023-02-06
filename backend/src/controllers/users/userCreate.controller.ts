import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";
import { instanceToPlain } from "class-transformer";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const newUser = await userCreateService(req.body);

    return res.status(201).send(instanceToPlain(newUser));
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userCreateController;
