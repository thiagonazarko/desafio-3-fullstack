import { Request, Response } from "express";
import { getClientService } from "../../services/client/getClient.service";

export const getClientController = async (req: Request, res: Response) => {
  const contactsFind = await getClientService();

  return res.status(200).send(contactsFind);
};
