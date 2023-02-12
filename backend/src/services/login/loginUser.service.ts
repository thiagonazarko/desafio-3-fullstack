import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/user";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const loginUserService = async ({ username, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const userFind = await userRepository.findOneBy({ username: username });

  if (!userFind) {
    throw new Error("Wrong email/password");
  }

  const passwordMatch = bcrypt.compareSync(password, userFind.password);

  if (!passwordMatch) {
    throw new Error("Wrong email/password");
  }
  const token = jwt.sign(
    { id: userFind.id, username: userFind.username },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
    }
  );

  return token;
};
