import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/user";

import { AppError } from "../../errors/AppError";

export const updateUserService = async (
  { full_name }: IUserUpdate,
  id: string,
  req_id: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const userFind = await userRepository.findOneBy({ id: id });

  if (!userFind) {
    throw new AppError("User not exists", 404);
  }

  const userAuth = await userRepository.findOneBy({ id: req_id });

  if (userFind?.id != userAuth?.id) {
    throw new AppError("Invalid User", 404);
  }

  await userRepository.update(id, { full_name: full_name });
};
