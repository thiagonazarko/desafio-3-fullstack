import AppDataSource from "../../data-source";

import { IContact } from "../../interfaces/contact";
import { IClientRequest } from "../../interfaces/client";
import { Client } from "../../entities/client.entity";
import { ContactsClient } from "../../entities/contactsClient.entity";

export const createClientService = async (
  { full_name, contacts }: IClientRequest,
  id_user: string
) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = clientRepository.create({
    full_name,
    user: { id: id_user },
  });
  await clientRepository.save(client);

  await createContacts(client.id, contacts);

  return client;
};

const createContacts = (id_client: string, links: IContact[]) => {
  const contactsClientRepository = AppDataSource.getRepository(ContactsClient);

  const contactsCreated = links.map(async ({ email, telephone }) => {
    const newContact = contactsClientRepository.create({
      email,
      telephone,
      client: { id: id_client },
    });

    await contactsClientRepository.save(newContact);

    return newContact;
  });

  return contactsCreated;
};

export const findClient = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOneBy({
    id: id,
  });

  return findClient;
};
