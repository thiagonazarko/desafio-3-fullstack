import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import {
  createClientService,
  findClient,
} from "../../services/client/clientCreate.service";

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
