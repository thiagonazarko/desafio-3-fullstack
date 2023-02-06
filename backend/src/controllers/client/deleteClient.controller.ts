import { Request, Response } from "express";
import { deleteClientService } from "../../services/client/deleteClient.service";

export const deleteClientController = async (req: Request, res: Response) => {
  await deleteClientService(req.params.id);

  return res.status(204).send();
};
