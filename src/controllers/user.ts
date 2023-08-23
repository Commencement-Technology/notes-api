import { NextFunction, Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import {createJWT, hashPassword} from "../middleware/auth"
import User from "../models/user";

export const SignUp = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const userExists = await User.findOne({email: req.body.email})
  if(userExists) {
    res.status(500)
    res.json({"message": "User already exits!"})
    next()
  }
  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: await hashPassword(req.body.password),
  })

  res.status(200)
  res.json({message: "User created", user})
})

export const LogIn = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findOne({email: req.body.email})
  if(!user) {
    res.status(400)
    res.json({message: "User doesn't exits!"})
    next()
  }
  const token = createJWT(user)
  res.status(200)
  res.json({user, token})
})
