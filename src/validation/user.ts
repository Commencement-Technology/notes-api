import { body } from "express-validator";

const userValidation = [
  // body("fullName")
  //   .exists({ checkFalsy: true })
  //   .withMessage("Full name is required")
  //   .isString()
  //   .withMessage("Full name should be string"),
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email not valid"),
  body("password")
    .exists()
    .withMessage("Password is required")
    .isString()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 letters long"),
];

export default userValidation;
