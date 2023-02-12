import AppDataSource from "../../data-source";

import { ContactsUser } from "../../entities/contactsUser.entity";
import { User } from "../../entities/user.entity";
import * as bcrypt from "bcryptjs";

import { IUserRequest } from "../../interfaces/user";
import { IContact } from "../../interfaces/contact";

export const createUserService = async ({
  username,
  password,
  full_name,
  contacts,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = userRepository.create({
    username,
    password: hashedPassword,
    full_name,
  });
  await userRepository.save(user);

  await createContacts(user.id, contacts);

  return user;
};

const createContacts = (id_user: string, contacts: IContact[]) => {
  const contactsUserRepository = AppDataSource.getRepository(ContactsUser);

  const contactsCreated = contacts.map(async ({ email, telephone }) => {
    const newContact = contactsUserRepository.create({
      email,
      telephone,
      user: { id: id_user },
    });

    await contactsUserRepository.save(newContact);

    return newContact;
  });

  return contactsCreated;
};

export const findUser = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: id,
  });

  return findUser;
};
