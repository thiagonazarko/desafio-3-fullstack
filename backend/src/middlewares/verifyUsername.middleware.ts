import e, { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

export const verifyUsernameMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const userFind = await userRepository.findOneBy({
    username: req.body.username,
  });

  if (!userFind) {
    next();
  } else {
    return res.status(400).send({ message: "Username Already Exists" });
  }
};
