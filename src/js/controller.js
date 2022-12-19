import * as model from "./model";
import newTaskView from "./newTaskView";

const controlNewTaskView = function () {
  newTaskView.toggleView();
};

const controlNewTaskViewSubtask = function (id) {
  newTaskView.addSubtask(id);
};

const controlAddTask = function () {
  newTaskView.toggleView();
  newTaskView.render();
  model.addTask();
};

const init = function () {
  newTaskView.render();
  newTaskView.addHandlerToggle(controlNewTaskView);
  newTaskView.addHandlerSubtask(controlNewTaskViewSubtask);
  newTaskView.addHandlerTask(controlAddTask);
};

init();

//TO DO
//1. DODAWANIE TASKA DO TABLICY
