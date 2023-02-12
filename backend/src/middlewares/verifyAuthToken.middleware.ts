import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyAuthTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
      if (error) {
        return res.status(401).send({ message: "Invalid Token" });
      }

      req.user = {
        userId: decoded.id,
        username: decoded.username,
      };

      next();
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};
