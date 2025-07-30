import bcrypt from "bcrypt";

// hashPassword
const hashPassword = async (password) => {
  return bcrypt.hash(password, 12);
};

// verifyPassword
const verifyPassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

// createResObj
const createResObj = (code, success, data, message) => {
  return {
    code,
    success,
    data,
    message,
  };
};

// sendResponse
const sendResponse = (
  res,
  { code = 200, success = true, data = null, message }
) => {
  return res.status(code).json({
    status: code,
    success,
    data,
    message,
  });
};

export { hashPassword, verifyPassword, createResObj, sendResponse };
