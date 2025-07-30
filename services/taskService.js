import {
  createTask,
  deleteTask,
  getMyTasks,
  getTaskById,
  getTasks,
  updateTask,
} from "../db/task.js";
import { createResObj } from "../helpers/index.js";

// add-task
const addTaskService = async (payload) => {
  try {
    const task = await createTask(payload);
    if (!task) {
      return createResObj(500, false, null, "Task not added successfully");
    } else {
      return createResObj(201, true, task, "Task Added Successfully");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// getTasksService
const getTasksService = async () => {
  try {
    const tasks = await getTasks();
    if (!tasks) {
      return createResObj(500, false, null, "Tasks fetch failded");
    } else {
      return createResObj(201, true, tasks, "Tasks fetched Successfully");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// getMyTasksService
const getMyTasksService = async (id) => {
  try {
    const tasks = await getMyTasks({ assignedTo: id });
    if (!tasks) {
      throw tasks;
      return createResObj(500, false, null, "Tasks fetch failded");
    } else {
      return createResObj(200, true, tasks, "Tasks fetched Successfully");
    }
  } catch (error) {
    console.log("Tasks Error ======================= =>");
    console.log("getMyTasksService Error =>", error);
    throw error;
  }
};

// getTaskService
const getTaskService = async (id) => {
  try {
    const task = await getTaskById(id);
    if (!task) return createResObj(404, false, null, "Task not found");

    return createResObj(200, true, task, "Task fetched Successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// updateTaskService
const updateTaskService = async (id, payload) => {
  try {
    const task = await updateTask(id, payload);
    if (!task) {
      return createResObj(500, false, null, "Task update failded");
    } else {
      return createResObj(200, true, task, "Task updated Successfully");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// deleteTaskService
const deleteTaskService = async (id) => {
  try {
    const task = await deleteTask(id);
    if (!task) {
      return createResObj(500, false, null, "Task deleted failded");
    } else {
      return createResObj(200, true, task, "Task deleted Successfully");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {
  addTaskService,
  getTasksService,
  getMyTasksService,
  getTaskService,
  updateTaskService,
  deleteTaskService,
};
