import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
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

const User = mongoose.model("User", userSchema)

export default User
