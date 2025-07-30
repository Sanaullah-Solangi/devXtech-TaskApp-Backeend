import { check } from "express-validator";

const authValidations = [
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isStrongPassword({ minLength: 3, maxLength: 8 })
    .withMessage(
      "Password must be 3 to 8 characters long and must be an strong password"
    ),
];

const registerValidations = [
  ...authValidations,
  check("username")
    .notEmpty()
    .withMessage("Please provide a username")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
];

const loginValidations = [...authValidations];

export { registerValidations, loginValidations };
