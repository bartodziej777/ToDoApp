import * as model from "./model";
import newTaskView from "./newTaskView";

const controlNewTaskView = function () {
  newTaskView.toggleView();
};

const controlNewTaskViewSubtask = function (id) {
  newTaskView.addSubtask(id);
};

const controlAddTask = function (obj) {
  model.addNewTask(obj);
  allTaskViewHandler();
};

const allTaskViewHandler = function () {
  newTaskView.render();
  newTaskView.addHandlerSubtask(controlNewTaskViewSubtask);
  newTaskView.addHandlerTask(controlAddTask);
};

const init = function () {
  newTaskView.addHandlerToggle(controlNewTaskView);
  allTaskViewHandler();
};

init();

//TO DO
// 1. NASTĘPNE WIDOKI

// TO FIX
// 1. UMOŻLIWIĆ INTERAKCJĘ PO DODANIU TASKA
// 2. Scroll na dól po dodaniu subtaska
