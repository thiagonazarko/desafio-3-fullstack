import { AppDataSource } from "../../../data-source";
import { User } from "../../entities/users.entity";
import { IUserCreate } from "../../interfaces/users";
import bcryptjs from "bcryptjs";
import { AppError } from "../../errors/appError";

const userCreateService = async ({
  email,
  password,
  name,
  phone,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(400, "Email already being used.");
  }

  const user = new User();
  user.email = email;
  user.password = bcryptjs.hashSync(password, 10);
  user.name = name;
  user.phone = phone;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
