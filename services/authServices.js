import { generateToken } from "../config/jwt.js";
import { createUser, getUserByEmail } from "../db/user.js";
import {
  createResObj,
  hashPassword,
  verifyPassword,
} from "../helpers/index.js";

// register
const registerService = async (payload) => {
  try {
    const { email, password } = payload;
    const isExisting = await getUserByEmail(email);
    if (isExisting)
      return createResObj(
        409,
        false,
        null,
        "User with this email already exist"
      );

    const hashedPassword = await hashPassword(password);
    payload.password = hashedPassword;

    const newUser = await createUser(payload);
    return createResObj(201, true, newUser, "User registered successfully");
  } catch (error) {
    console.log("register service error =>", error);
    throw error;
  }
};

// loign
const loginService = async (payload) => {
  try {
    console.log("payload =>", payload);
    const { email, password } = payload;
    const isExisting = await getUserByEmail(email);
    if (!isExisting) return createResObj(404, false, null, "User not found");

    const hashedPassword = await verifyPassword(password, isExisting.password);
    if (!hashedPassword)
      return createResObj(401, false, null, "Invalid password");
    delete isExisting.password;
    const token = generateToken(isExisting);

    return createResObj(
      200,
      true,
      { ...isExisting, token },
      "User login successfully"
    );
  } catch (error) {
    console.log("login service error =>", error);
    throw error;
  }
};

export { registerService, loginService };
