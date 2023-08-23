import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10)
}

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash)
}

export const createJWT = (user: any) => {
  const token = jwt.sign({
    id: user.id,
    email: user.email,
  }, process.env.JWT_SECRET!)
  return token
}
