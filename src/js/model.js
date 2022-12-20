import { v4 as uuidv4 } from "uuid";

export const state = {
  tasks: [], //Array of active tasks
  pinned: [], //Array of id's pinned tasks
  deletd: [], //Array of deleted tasks,
};

export const addNewTask = function (obj) {
  const task = {
    id: uuidv4(),
    name: obj.taskName,
    subtasks: obj.subtasks,
  };

  state.tasks.push(task);
  console.log(task);
};
