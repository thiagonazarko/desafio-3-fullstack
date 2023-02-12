import { Request, Response } from "express";
import {
  createUserService,
  findUser,
} from "../../services/user/createUser.service";
import { instanceToPlain } from "class-transformer";
import { getUserService } from "../../services/user/getUser.service";
import { deleteUserService } from "../../services/user/deleteUser.service";
import { updateUserService } from "../../services/user/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const userCreated = await createUserService(req.body);
    setTimeout(async () => {
      return res
        .status(201)
        .json(instanceToPlain(await findUser(userCreated.id)));
    }, 1000);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export const getUserController = async (req: Request, res: Response) => {
  try {
    const userFind = await getUserService(req.user.userId);

    return res.status(200).send(instanceToPlain(userFind));
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    await updateUserService(req.body, req.params.id, req.user.userId);

    return res.status(200).send();
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    await deleteUserService(req.params.id, req.user.userId);

    return res.status(204).send();
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
