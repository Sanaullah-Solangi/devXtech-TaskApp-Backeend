import UserModel from "../models/userModel.js";

// get-all-users
const getUsers = async (query = {}) => {
  return await UserModel.find(query).lean();
};

// getUserByEmail
const getUserByEmail = async (email) => {
  return await UserModel.findOne({ email }).lean();
};

// getUserById
const getUserById = async (id) => {
  return await UserModel.findOne({ _id: id }).lean();
};

// createUser
const createUser = async (payload) => {
  return UserModel.create(payload).then((user) =>
    user ? user.toObject() : null
  );
};

// updateUser
const updateUser = async (id, payload) => {
  return UserModel.findOneAndUpdate({ _id: id }, payload, { new: true });
};

// deleteUser
const deleteUser = async (id) => {
  return UserModel.findOneAndDelete({ _id: id });
};

export {
  getUsers,
  getUserByEmail,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
