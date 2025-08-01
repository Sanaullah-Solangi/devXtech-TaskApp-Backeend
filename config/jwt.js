import jwt from "jsonwebtoken";

// generateToken
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY);
};

// verifyToken
const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};

export { generateToken, verifyToken };
