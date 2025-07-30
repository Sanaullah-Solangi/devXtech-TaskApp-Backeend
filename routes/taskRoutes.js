import express from "express";
const taskRouter = express.Router();

import { authenticateUser, validateRequest } from "../middlewares/index.js";
import { taskValidations } from "../validations/taskValidations.js";
import {
  addTask,
  deleteTask,
  getAllTasks,
  getMyTasks,
  getTask,
  updateTask,
} from "../controllers/taskControllers.js";

taskRouter.get("/get-tasks", authenticateUser(["admin"]), getAllTasks);

taskRouter.get(
  "/get-my-tasks",
  authenticateUser(["admin", "user"]),
  getMyTasks
);

taskRouter.get(
  "/get-singal-task/:id",
  authenticateUser(["admin", "user"]),
  getTask
);

taskRouter.post(
  "/add-task",
  taskValidations,
  validateRequest,
  authenticateUser(["admin", "user"]),
  addTask
);

taskRouter.put(
  "/update-task/:id",
  authenticateUser(["admin", "user"]),
  updateTask
);

taskRouter.delete(
  "/delete-task/:id",
  authenticateUser(["admin", "user"]),
  deleteTask
);

export default taskRouter;
