import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserTypes } from "../types";

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const createJWT = (user: UserTypes) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "30d",
    },
  );
  return token;
};

export const protectedRoute = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // const bearer: string = req.headers.authorization!;
  // if (!bearer) {
  // res.status(401);
  //   // res.json({ message: "Unauthorized!" });
  //   return;
  // }

  // const [_, token] = bearer.split(" ");
  const token = req.cookies.jwtToken;

  if (!token) {
    res.status(401);
    res.json({ message: "Invalid token" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!) as UserTypes;
    req.user = user;
    next();
  } catch (e) {
    res.status(401);
    res.json({ message: "invalid token" });
  }
};
