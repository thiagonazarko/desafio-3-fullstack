import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";

const verifyEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const userFind = await userRepository.findOneBy({
    email: req.body.email,
  });

  if (!userFind) {
    next();
  } else {
    return res.status(400).send({ message: "Email already beign used." });
  }
};

export default verifyEmailMiddleware;
