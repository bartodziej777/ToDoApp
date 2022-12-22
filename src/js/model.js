import { v4 as uuidv4 } from "uuid";

export const state = {
  view: "",
  tasks: [], //Array of active tasks
  completed: [], //Array of deleted tasks,
};

export const addNewTask = function (obj) {
  const task = {
    id: uuidv4(),
    name: obj.taskName,
    subtasks: obj.subtasks,
    pinned: false,
  };

  state.tasks.push(task);
};

export const pinTask = function (id) {
  const index = state.tasks.findIndex((el) => el.id === id);
  state.tasks[index].pinned
    ? (state.tasks[index].pinned = false)
    : (state.tasks[index].pinned = true);
};

export const markAsDone = function (id) {
  const index = state.tasks.findIndex((el) => el.id === id);
  const task = state.tasks.splice(index, 1);
  state.completed.push(...task);
};

export const restoreTask = function (id) {
  const index = state.completed.findIndex((el) => el.id === id);
  const task = state.completed.splice(index, 1);
  state.tasks.push(...task);
};

export const cleanCompleted = function () {
  state.completed.length = 0;
};
