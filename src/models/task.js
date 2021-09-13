const tasks = [];
let id = 1;

function addTask({ description }) {
  const task = { description, id: id++, done: false };
  tasks.push(task);
  return task;
}

function getAllTasks({ description }) {
  if (description) {
    const filtered = tasks.filter((task) =>
      task.description.includes(description)
    );
    return filtered;
  }
  return tasks;
}

function getTaskById(id) {
  return tasks.find((task) => task.id === id);
}

function updateTaskById(id, { done, description }) {
  const task = getTaskById(id);
  if (done !== undefined) {
    task.done = !!done;
  }
  if (description) {
    task.description = description;
  }
  return task;
}
function getTaskIndexById(id) {
  return tasks.findIndex((task) => task.id === id);
}

function deleteTaskById(id) {
  let taskIndex = getTaskIndexById(id);
  tasks.splice(taskIndex, 1);
}

module.exports = {
  addTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  getTaskIndexById,
  deleteTaskById,
};
