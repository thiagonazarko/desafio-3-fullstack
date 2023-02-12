import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";

import { AppError } from "../../errors/AppError";

export const deleteClientService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientFind = await clientRepository.findOneBy({ id: id });

  if (!clientFind) {
    throw new AppError("Client not exists", 404);
  }

  await clientRepository.delete(id);
};
