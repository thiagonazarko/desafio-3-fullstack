import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";

export const getClientService = async () => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = clientRepository.find();

  return clients;
};
