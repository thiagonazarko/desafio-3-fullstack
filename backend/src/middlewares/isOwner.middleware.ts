import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";

const isOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.user;

  const paramsId = req.params.id;

  const usersRepository = AppDataSource.getRepository(User);
  const findUser = await usersRepository.findOneBy({ id: paramsId });
  if (!findUser) {
    return res.status(404).json({ message: "User not found" });
  }

  if (id !== paramsId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

export default isOwnerMiddleware;
