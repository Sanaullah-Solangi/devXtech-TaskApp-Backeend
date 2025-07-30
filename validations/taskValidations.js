import { check } from "express-validator";

const taskValidations = [
  check("title").notEmpty().withMessage("Please Provide a title"),
  check("description").notEmpty().withMessage("Please Provide desciption"),
];

export { taskValidations };
