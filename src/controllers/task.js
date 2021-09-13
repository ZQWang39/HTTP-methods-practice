const taskFunctions = require("../models/task");

function addTask(req, res) {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json("description is missing");
  }
  const task = taskFunctions.addTask({ description });
  return res.status(201).json(task);
}

function getAllTasks(req, res) {
  const { description } = req.query;
  const tasks = taskFunctions.getAllTasks({ description });
  return res.json(tasks);
}

function getTaskById(req, res) {
  const { id } = req.params;
  const task = taskFunctions.getTaskById(id);
  return res.json(task);
}

function updateTaskById(req, res) {
  const { id } = req.params;
  const { done, description } = req.body;
  const task = taskFunctions.updateTaskById(id, { done, description });
  return res.json(task);
}

function deleteTaskById(req, res) {
  const { id } = req.params;
  const task = taskFunctions.deleteTaskById(id);
  return res.json(task);
}

module.exports = {
  addTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
