import * as express from "express";
import {
  IUserUpdate,
  IUserCreate,
  IData,
  IToken,
} from "../../src/interfaces/users";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
      NewUser: {
        id: string;
        name: string;
        email: string;
        password: string;
      };
      validatedUser: {
        email: string;
        password: string;
        name: string;
        phone: string;
      };
    }
  }
}
