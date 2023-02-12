import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

export const getUserService = async (req_id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userAuth = await userRepository.findOneBy({ id: req_id });

  return userAuth;
};
