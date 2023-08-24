import { body } from "express-validator";

const notesValidation = [
  body("title").optional().isString().withMessage("Title should be string"),
  body("body")
    .exists()
    .withMessage("Body should not be empty")
    .isString()
    .withMessage("Body should be string"),
];

export default notesValidation;
