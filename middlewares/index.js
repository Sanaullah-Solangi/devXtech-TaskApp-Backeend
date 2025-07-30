import { validationResult } from "express-validator";
import { sendResponse } from "../helpers/index.js";
import { verifyToken } from "../config/jwt.js";
import { getUserByEmail } from "../db/user.js";
import mongoose from "mongoose";

// validateRequest
const validateRequest = (req, res, next) => {
  const errorObj = {};
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errors.errors.forEach((err) => (errorObj[err.path] = err.msg));
    sendResponse(res, {
      code: 402,
      success: false,
      data: "null",
      message: errorObj,
    });
  }
  next();
};

// authenticateUser
const authenticateUser = (role) => {
  return async (req, res, next) => {
    try {
      const bearerToken = req?.headers?.authorization;
      if (!bearerToken)
        return sendResponse(res, {
          code: 400,
          success: false,
          data: null,
          message: "Token not provided",
        });

      const token = bearerToken.split(" ")[1];
      const decodedToken = verifyToken(token);
      if (!decodedToken) {
        return sendResponse(res, {
          code: 401,
          success: false,
          data: null,
          message: "Invalid token",
        });
      }

      const isExisting = await getUserByEmail(decodedToken.email);
      if (!isExisting) {
        return sendResponse(res, {
          code: 401,
          success: false,
          data: null,
          message: "Unauthorized User",
        });
      }

      if (!role.includes(isExisting.role)) {
        return sendResponse(res, {
          code: 401,
          success: false,
          data: null,
          message: "Aceess denied",
        });
      }
      req.user = isExisting;
      next();
    } catch (error) {
      console.log(error);

      next(error);
    }
  };
};

const errorHandler = (err, req, res, next) => {
  const status = err instanceof mongoose.Error.ValidationError ? 422 : 500;
  const msg =
    err.name == "JsonWebTokenError" ? "Token Not Provided" : err?.message;
  console.log("Checking Error type =>", err.name);
  res.status(status).json({
    status: status,
    type: err?.name || "Error",
    success: false,
    message: msg || "Something went wrong!",
  });
};

export { validateRequest, authenticateUser, errorHandler };
