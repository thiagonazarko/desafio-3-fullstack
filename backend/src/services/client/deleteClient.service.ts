import { AppDataSource } from "../../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

export const deleteClientService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientFind = await clientRepository.findOneBy({ id: id });

  if (!clientFind) {
    throw new AppError(404, "Client do not exists.");
  }

  await clientRepository.delete(id);
};
