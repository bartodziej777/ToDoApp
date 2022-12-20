export const state = {
  tasks: [], //Array of active tasks
  pinned: [], //Array of id's pinned tasks
  deletd: [], //Array of deleted tasks,
};

export const addNewTask = function (obj) {
  const task = {
    name: obj.taskName,
    subtasks: obj.stubtasks,
  };

  state.tasks.push(task);
};
