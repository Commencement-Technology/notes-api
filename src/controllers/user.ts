import { Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import { createJWT, hashPassword } from "../middleware/auth";
import User from "../models/user";
import { validationResult } from "express-validator";

export const SignUp = asyncHandler(async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ success: false, errors: errors.array() });
    return;
  }

  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    res.status(400);
    res.json({ message: "User already exits!" });
    return;
  }
  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: await hashPassword(req.body.password),
  });

  const token = createJWT(user);
  // res.json({ message: "User created", user, token });
  res.status(201).cookie("jwtToken", token);
});

export const LogIn = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(404);
    res.json({ message: "User doesn't exits!" });
    return;
  }
  const token = createJWT(user);
  res.status(200).cookie("jwtToken", token);
  // res.json({ user, token });
});
