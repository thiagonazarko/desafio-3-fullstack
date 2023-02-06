import { AppDataSource } from "../../data-source";
import "dotenv/config";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/users.entity";

const userDeleteService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = userRepository.findOneBy({ id: userId });

  if (!findUser) {
    throw new AppError(404, "User not found.");
  }

  await userRepository.delete(userId);
};

export default userDeleteService;
