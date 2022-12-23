import * as model from "./model";
import completedTaskView from "./completedTaskView";
import listTaskView from "./listTaskView";
import newTaskView from "./newTaskView";
import pinnedTaskView from "./pinnedTaskView";
import taskView from "./taskView";

const controlNewTaskView = function () {
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
};

const controlPinnedTaskView = function () {
  model.state.view = "pinned";
  pinnedTaskView.render(model.state.tasks);
};

const controlCompletedTaskView = function () {
  model.state.view = "completed";
  completedTaskView.render(model.state.completed);
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

const controlTaskMarkSubtask = function (id, index) {
  console.log("a");
  model.markAsDoneSubtask(id, index);
  taskView.render(model.getTask(id));
};

const init = function () {
  newTaskView.addHandlerToggle(controlNewTaskView);
  allTaskViewHandler();
  listTaskView.addHandlerToggle(controlListTaskView);
  listTaskView.addHandlerPin(controlListTaskPin);
  listTaskView.addHanlderComplete(controlListTaskComplete);
  pinnedTaskView.addHandlerToggle(controlPinnedTaskView);
  completedTaskView.addHandlerToggle(controlCompletedTaskView);
  completedTaskView.addHanlderRestore(controlRestoreHandler);
  completedTaskView.addHandlerClean(controlCleanHandler);
  taskView.addHandler(controlTaskView);
  taskView.addHandlerMarkAsDoneSubtask(controlTaskMarkSubtask);
};

init();

//TO DO
// 1. WIDOK LISTY TASKÓW ✅
// 2. WIDOK KONKRETNEGO TASKU
// 3. WIDOK PRZYPIĘTYCH TASKÓW ✅
// 4. SEARCH BAR DO SZUKANIA TASKÓW
// 5. WIDOK SKOŃCZONYCH TASKÓW ✅
// 6. IMPLEMENTACJA LOCALSTORAGE
// 7. KOMUNIKATY PO PRZEŁĄCZNIU NA WIDOKI O NP. BRAKU PRZYPIĘTYCH TASKÓW ✅
// 8. BLUR W TLE GDY MODAL JEST AKTYWNY ✅
// ---------
// 1. DOKOŃCZYĆ RWD
// 2. IKONY ZMIENIC NA HOSTOWANE OD SIEBIE
// 3. DODAĆ PLIK README.MD

// TO FIX
// 1. UMOŻLIWIĆ INTERAKCJĘ PO DODANIU TASKA ✅
// 2. Scroll na dól po dodaniu subtaska
// 3. Pojawianie sie modala ✅
// 4. Schowanie modala po przełączeniu widoku (PRAWDOPODOBNIE: przerobic na dwie podfunkcje -> chowającą i pokazującą)
