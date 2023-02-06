import { Request, Response } from "express";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const data = req.body;
  const updatedUser = await userUpdateService(data, userId);

  return res.status(200).send(updatedUser);
};

export default userUpdateController;
