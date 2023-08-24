import { Types, Document } from "mongoose";

export interface UserTypes extends Document {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
}

export interface NotesTypes extends Document {
  user: Types.ObjectId;
  title: String;
  body: String;
}

declare global {
  namespace Express {
    export interface Request {
      user?: UserTypes;
    }
  }
}
