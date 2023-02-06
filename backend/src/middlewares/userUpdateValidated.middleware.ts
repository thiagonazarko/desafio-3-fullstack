import { NextFunction, Request, Response } from "express";

const userValidateUpdated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const keys = Object.keys(req.body);
  if (keys.includes("id")) {
    return res.status(401).json({ message: "Wrong input" });
  }

  return next();
};

export default userValidateUpdated;
