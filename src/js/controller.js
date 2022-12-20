import * as model from "./model";
import newTaskView from "./newTaskView";

const controlNewTaskView = function () {
  newTaskView.toggleView();
};

const controlNewTaskViewSubtask = function (id) {
  newTaskView.addSubtask(id);
};

const controlAddTask = function (obj) {
  newTaskView.toggleView();
  newTaskView.render();
  model.addNewTask(obj);
};

const init = function () {
  newTaskView.render();
  newTaskView.addHandlerToggle(controlNewTaskView);
  newTaskView.addHandlerSubtask(controlNewTaskViewSubtask);
  newTaskView.addHandlerTask(controlAddTask);
};

init();

//TO DO
// 1. NASTĘPNE WIDOKI

// TO FIX
// 1. UMOŻLIWIĆ INTERAKCJĘ PO DODANIU TASKA
