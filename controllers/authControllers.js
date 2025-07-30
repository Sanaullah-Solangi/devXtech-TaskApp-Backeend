import { sendResponse } from "../helpers/index.js";
import { loginService, registerService } from "../services/authServices.js";
import { getUsers } from "../db/user.js";
const getAllUsers = async (req, res, next) => {
  try {
    const result = await getUsers();
    console.log("testing result =>", result);
    if (result)
      sendResponse(res, {
        code: 200,
        success: true,
        data: result,
        message: "Tasks fetched successfully",
      });
  } catch (error) {
    console.log("register controller error =>", error);
    next(error);
  }
};
// register
const register = async (req, res, next) => {
  try {
    const payload = req.body;
    const result = await registerService(payload);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("register controller error =>", error);
    next(error);
  }
};
// login
const login = async (req, res, next) => {
  try {
    const payload = req.body;
    const result = await loginService(payload);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("login controller error =>", error);
    next(error);
  }
};

export { register, login, getAllUsers };
