import newTaskView from "./newTaskView";

const controlNewTaskView = function (element) {
  //Showing and hiding element
  newTaskView.toggleView();
};

const init = function () {
  newTaskView.render();
  newTaskView.addHandler(controlNewTaskView);
};

init();
