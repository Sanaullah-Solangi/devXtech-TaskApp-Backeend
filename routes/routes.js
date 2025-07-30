import express from "express";
const routes = express.Router();
import authRoutes from "./authRoutes.js";
import taskRoutes from "./taskRoutes.js";

routes.use("/auth", authRoutes);
routes.use("/task", taskRoutes);

export default routes;
