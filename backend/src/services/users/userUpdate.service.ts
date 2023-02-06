import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";

const userUpdateService = async (data: any, userId: string) => {
  if (data.id !== undefined) {
    throw new AppError(401, "Cannot change this field.");
  }

  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id: userId });

  if (!findUser) {
    throw new AppError(404, "User not found.");
  }

  const { email, password, name, phone } = data;
  const newUser = {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
    phone: phone ? phone : findUser.phone,
  };

  const updatedUser = Object.assign(findUser, newUser);

  await userRepository.update(findUser.id, { ...updatedUser });

  return findUser;
};

export default userUpdateService;
