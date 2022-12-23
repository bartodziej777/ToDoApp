import * as model from "./model";
import completedTaskView from "./completedTaskView";
import listTaskView from "./listTaskView";
import newTaskView from "./newTaskView";
import pinnedTaskView from "./pinnedTaskView";
import searchView from "./searchView";
import taskView from "./taskView";

const controlNewTaskView = function () {
  taskView.render();
  newTaskView.toggleView();
};

const controlNewTaskViewSubtask = function (id) {
  newTaskView.addSubtask(id);
};

const controlAddTask = function (obj) {
  model.addNewTask(obj);
  allTaskViewHandler();
  controlListTaskView();
};

const allTaskViewHandler = function () {
  newTaskView.render();
  newTaskView.addHandlerSubtask(controlNewTaskViewSubtask);
  newTaskView.addHandlerTask(controlAddTask);
};

const controlListTaskPin = function (id) {
  model.pinTask(id);
  if (model.state.view === "list") listTaskView.render(model.state.tasks);
  if (model.state.view === "pinned") pinnedTaskView.render(model.state.tasks);
};

const controlListTaskComplete = function (id) {
  model.markAsDone(id);
  if (model.state.view === "list") listTaskView.render(model.state.tasks);
  if (model.state.view === "pinned") pinnedTaskView.render(model.state.tasks);
};

const controlListTaskView = function () {
  model.state.view = "list";
  listTaskView.render(model.state.tasks);
  taskView.render();
  newTaskView.toggleView(false);
};

const controlPinnedTaskView = function () {
  model.state.view = "pinned";
  pinnedTaskView.render(model.state.tasks);
  taskView.render();
  newTaskView.toggleView(false);
};

const controlCompletedTaskView = function () {
  model.state.view = "completed";
  completedTaskView.render(model.state.completed);
  taskView.render();
  newTaskView.toggleView(false);
};

const controlRestoreHandler = function (id) {
  model.restoreTask(id);
  completedTaskView.render(model.state.completed);
};

const controlCleanHandler = function () {
  model.cleanCompleted();
  completedTaskView.render(model.state.completed);
};

const controlTaskView = function (id) {
  //console.log(model.getTask(id));
  taskView.render(model.getTask(id));
};

const controlHandlerTaskMarkSubtask = function (id, index) {
  model.markAsDoneSubtask(id, index);
  taskView.render(model.getTask(id));
};

const controlHandlerTaskPin = function (id) {
  model.pinTask(id);
  taskView.render(model.getTask(id));
};

const controlHandlerTaskClose = function () {
  taskView.render();
  if (model.state.view === "list") listTaskView.render(model.state.tasks);
  if (model.state.view === "pinned") pinnedTaskView.render(model.state.tasks);
  if (model.state.view === "completed")
    completedTaskView.render(model.state.tasks);
  if (model.state.view === "search") searchView.render();
};

const controlSearchViewToggle = function () {
  taskView.render();
  newTaskView.toggleView(false);
  searchView.render();
  model.state.view = "search";
};

const controlHandlerSearch = function (content) {
  const results = model.searchTask(content);
  searchView.renderResults(results);
};

const controlLocalStorage = function () {
  window.addEventListener("load", model.getData);
  window.addEventListener("beforeunload", model.saveData);
};

const init = function () {
  allTaskViewHandler();
  listTaskView.addHandlerToggle(controlListTaskView);
  listTaskView.addHandlerPin(controlListTaskPin);
  listTaskView.addHanlderComplete(controlListTaskComplete);
  pinnedTaskView.addHandlerToggle(controlPinnedTaskView);
  completedTaskView.addHandlerToggle(controlCompletedTaskView);
  completedTaskView.addHanlderRestore(controlRestoreHandler);
  completedTaskView.addHandlerClean(controlCleanHandler);
  taskView.addHandler(controlTaskView);
  taskView.addHandlerMarkAsDoneSubtask(controlHandlerTaskMarkSubtask);
  taskView.addHanlderPin(controlHandlerTaskPin);
  taskView.addHandlerClose(controlHandlerTaskClose);
  newTaskView.addHandlerToggle(controlNewTaskView);
  searchView.addHandlerToggle(controlSearchViewToggle);
  searchView.addHandlerSearch(controlHandlerSearch);
  controlLocalStorage();
};

init();

// 1. DOKOŃCZYĆ RWD
// 2. IKONY ZMIENIC NA HOSTOWANE OD SIEBIE
// 3. DODAĆ PLIK README.MD
