import { AppDataSource } from "../../../data-source";
import { IClientUpdate } from "../../interfaces/client";
import { AppError } from "../../errors/appError";
import { Client } from "../../entities/client.entity";

export const updateClientService = async (
  { full_name }: IClientUpdate,
  id: string
) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientFind = await clientRepository.findOneBy({ id: id });

  if (!clientFind) {
    throw new AppError(404, "Client do not exists.");
  }

  await clientRepository.update(id, { full_name: full_name });
};
