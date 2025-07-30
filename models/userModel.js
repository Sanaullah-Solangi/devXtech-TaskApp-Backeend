import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const userSchema = Schema({
  username: { type: String },
  email: { type: String, required: true },
  role: { type: String, default: "user" },
  password: { type: String, required: true },
});

const UserModel = models.Users || model("Users", userSchema);
export default UserModel;
