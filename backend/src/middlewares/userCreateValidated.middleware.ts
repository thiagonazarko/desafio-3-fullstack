import { Request, Response, NextFunction } from "express";
import { IUserCreate } from "../interfaces/users";

import * as yup from "yup";
import { SchemaOf } from "yup";

export const userCreateSchema: SchemaOf<IUserCreate> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
  phone: yup.string().required(),
});

export const userCreateValidated =
  (schema: SchemaOf<IUserCreate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });
        req.validatedUser = validatedData;

        next();
      } catch (err: any) {
        return res.status(400).json({
          error: err.errors?.join(", "),
        });
      }
    } catch (err) {
      next(err);
    }
  };
