import mongoose from "mongoose";
import { UserTypes } from "../types";

const userSchema = new mongoose.Schema<UserTypes>(
  {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      unique: true,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject._v;
    delete returnedObject._password;
  },
});

const User = mongoose.model<UserTypes>("User", userSchema);

export default User;
