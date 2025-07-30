import { sendResponse } from "../helpers/index.js";
import {
  addTaskService,
  deleteTaskService,
  getMyTasksService,
  getTaskService,
  getTasksService,
  updateTaskService,
} from "../services/taskService.js";

// add-task
const addTask = async (req, res, next) => {
  try {
    const payload = req.body;
    const result = await addTaskService(payload);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("task controller erro =>", error);
    next(error);
  }
};

// get-all-tasks
const getAllTasks = async (req, res, next) => {
  try {
    const result = await getTasksService();
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("task controller erro =>", error);
    next(error);
  }
};

// get-my-tasks
const getMyTasks = async (req, res, next) => {
  try {
    const { _id } = req.user;
    console.log(req.user._id);
    const result = await getMyTasksService(_id);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("task controller erro =>", error);
    next(error);
  }
};

// get-task
const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getTaskService(id);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("task controller erro =>", error);
    next(error);
  }
};

// update-task
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    console.log("id =>", id);
    console.log("payload =>", payload);
    const result = await updateTaskService(id, payload);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("task controller erro =>", error);
    next(error);
  }
};

// delete-task
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteTaskService(id);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("task controller erro =>", error);
    next(error);
  }
};

export { addTask, getAllTasks, getMyTasks, getTask, updateTask, deleteTask };
