import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import {
  createClientService,
  findClient,
} from "../../services/client/createClient.service";
import { getClientService } from "../../services/client/getClient.service";
import { deleteClientService } from "../../services/client/deleteClient.service";
import { updateClientService } from "../../services/client/updateClient.service";

export const createClientController = async (req: Request, res: Response) => {
  const clientCreated = await createClientService(
    req.body,
    req.params.id_client
  );

  setTimeout(async () => {
    return res
      .status(201)
      .send(instanceToPlain(await findClient(clientCreated.id)));
  }, 1000);
};

export const getClientController = async (req: Request, res: Response) => {
  const contactsFind = await getClientService();

  return res.status(200).send(contactsFind);
};

export const updateClientController = async (req: Request, res: Response) => {
  await updateClientService(req.body, req.params.id);

  return res.status(200).send();
};

export const deleteClientController = async (req: Request, res: Response) => {
  await deleteClientService(req.params.id);

  return res.status(204).send();
};
