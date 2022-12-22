import { v4 as uuidv4 } from "uuid";

export const state = {
  tasks: [], //Array of active tasks
  pinned: [], //Array of id's pinned tasks
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
  if (!state.tasks[index].pinned) {
    state.tasks[index].pinned = true;
    state.pinned.push(state.tasks[index]);
  } else {
    state.tasks[index].pinned = false;
    const pinIndex = state.pinned.findIndex((el) => el.id === id);
    state.pinned.splice(pinIndex, 1);
  }
};

export const markAsDone = function (id) {
  const index = state.tasks.findIndex((el) => el.id === id);
  //if (!index) return;
  //console.log(index);
  const task = state.tasks.splice(index, 1);
  //console.log(task);
  state.completed.push(task);
};
