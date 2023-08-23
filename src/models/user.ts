import mongoose from "mongoose"
import {UserTypes} from "../types"

const userSchema = new mongoose.Schema<UserTypes>({
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
  }
}, {
  timestamps: true,
})

const User = mongoose.model<UserTypes>("User", userSchema)

export default User
