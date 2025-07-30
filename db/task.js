import TaskModel from "../models/taskModel.js";

// get-all-tasks
const getTasks = async (query = {}) => {
  return await TaskModel.find(query).populate("assignedTo", "username");
};

// get-My-all-tasks
const getMyTasks = async (query = {}) => {
  return await TaskModel.find(query).populate("assignedTo", "username");
};

// getTaskById
const getTaskById = async (id) => {
  return await TaskModel.findOne({ _id: id }).populate(
    "assignedTo",
    "username"
  );
};

// createTask
const createTask = async (payload) => {
  return TaskModel.create(payload).then((task) =>
    task ? task.toObject() : null
  );
};

// updateTask
const updateTask = async (id, payload) => {
  return TaskModel.findOneAndUpdate({ _id: id }, payload, { new: true });
};

// deleteTask
const deleteTask = async (id) => {
  return TaskModel.findOneAndDelete({ _id: id });
};

export {
  getTasks,
  getTaskById,
  getMyTasks,
  createTask,
  updateTask,
  deleteTask,
};
