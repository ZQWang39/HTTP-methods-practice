const express = require("express");
const parseId = require("../middleware/parseId");
const checkTaskExist = require("../middleware/checkTaskExist");
const {
  addTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/task");

const router = express.Router();

router.post("", addTask);
router.get("", getAllTasks);
router.get("/:id", parseId, checkTaskExist, getTaskById);
router.put("/:id", parseId, checkTaskExist, updateTaskById);
router.delete("/:id", parseId, checkTaskExist, deleteTaskById);

module.exports = router;
