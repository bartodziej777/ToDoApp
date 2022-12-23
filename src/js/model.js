export const state = {
  view: "",
  tasks: [], //Array of active tasks
  completed: [], //Array of deleted tasks,
};

export const addNewTask = function (obj) {
  const task = {
    id: crypto.randomUUID(),
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

export const getTask = function (id) {
  return state.tasks[state.tasks.findIndex((el) => el.id === id)];
};

export const markAsDoneSubtask = function (id, index) {
  state.tasks[state.tasks.findIndex((el) => el.id === id)].subtasks[
    index
  ].done =
    !state.tasks[state.tasks.findIndex((el) => el.id === id)].subtasks[index]
      .done;
};
