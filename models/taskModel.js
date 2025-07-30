import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const taskSchema = Schema({
  title: { type: String },
  description: { type: String },
  dueDate: { type: Date },
  status: { type: String, default: "pending" },
  assignedTo: { type: mongoose.Schema.ObjectId, ref: "Users" },
});

const TaskModel = models.Tasks || model("Tasks", taskSchema);
export default TaskModel;
