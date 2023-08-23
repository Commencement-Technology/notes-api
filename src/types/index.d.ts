import {Types} from "mongoose"


export interface UserTypes {
  firstName: String,
  lastName: String,
  email: String,
  password: String
}

export interface Notes {
  user: Types.ObjectId,
  title: String,
  body: String
}

declare global {
  namespace Express {
    export interface Request {
      user?: UserTypes;
    }
  }
}
