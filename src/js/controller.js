import * as model from "./model";
import newTaskView from "./newTaskView";

const controlNewTaskView = function () {
  newTaskView.toggleView();
};

const controlNewTaskViewSubtask = function (id) {
  newTaskView.addSubtask(id);
};

const init = function () {
  newTaskView.render();
  newTaskView.addHandlerToggle(controlNewTaskView);
  newTaskView.addHandlerSubtask(controlNewTaskViewSubtask);
};

init();
