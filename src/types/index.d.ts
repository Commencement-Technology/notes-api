import { Types, Document } from "mongoose";

export interface UserTypes extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface NotesTypes extends Document {
  user: Types.ObjectId;
  title: string;
  body: string;
}

declare global {
  namespace Express {
    export interface Request {
      user?: UserTypes;
    }
  }
}
