import { AppDataSource } from "../../data-source";
import { IUserLogin } from "../../interfaces/users";
import { User } from "../../entities/users.entity";
import * as bcryptjs from "bcryptjs";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";

const loginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ email });

  if (!findUser) {
    throw new AppError(403, "Invalid username or password.");
  }

  const matchPassword = bcryptjs.compareSync(password, findUser.password);

  if (!matchPassword) {
    throw new AppError(403, "Invalid username or password.");
  }

  const token = jwt.sign(
    {
      email: findUser.email,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: findUser.id,
    }
  );

  return token;
};

export default loginService;
