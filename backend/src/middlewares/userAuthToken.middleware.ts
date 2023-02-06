import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const userAuthTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Invalid token.",
    });
  }

  if (token.includes("Bearer")) {
    token = token.split(" ")[1];
  }

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      return res.status(403).json({
        message: "Unauthorized.",
      });
    }
    req.user = {
      id: decoded.sub,
    };

    return next();
  });
};

export default userAuthTokenMiddleware;
