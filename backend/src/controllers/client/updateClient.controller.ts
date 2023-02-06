import { Request, Response } from "express";
import { updateClientService } from "../../services/client/updateClient.service";

export const updateClientController = async (req: Request, res: Response) => {
  await updateClientService(req.body, req.params.id);

  return res.status(200).send();
};
