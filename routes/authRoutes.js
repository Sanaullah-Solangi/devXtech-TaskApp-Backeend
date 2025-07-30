import express from "express";
const authRouter = express.Router();
import {
  register,
  login,
  getAllUsers,
} from "../controllers/authControllers.js";
import {
  loginValidations,
  registerValidations,
} from "../validations/authValidations.js";
import { validateRequest } from "../middlewares/index.js";

authRouter.get("/getUsers", getAllUsers);
authRouter.post("/register", registerValidations, validateRequest, register);
authRouter.post("/login", loginValidations, validateRequest, login);

export default authRouter;
