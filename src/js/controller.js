import * as model from "./model";
import listTaskView from "./listTaskView";
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

const controlListTaskView = function () {
  listTaskView.render(model.state.tasks);
};

const init = function () {
  newTaskView.addHandlerToggle(controlNewTaskView);
  allTaskViewHandler();
  listTaskView.addHandlerToggle(controlListTaskView);
};

init();

//TO DO
// 1. WIDOK LISTY TASKÓW
// 2. WIDOK KONKRETNEGO TASKU
// 3. WIDOK PRZYPIĘTYCH TASKÓW
// 4. SEARCH BAR DO SZUKANIA TASKÓW
// 5. WIDOK SKOŃCZONYCH TASKÓW
// 6. IMPLEMENTACJA LOCALSTORAGE
// ---------
// 1. DOKOŃCZYĆ RWD
// 2. IKONY ZMIENIC NA HOSTOWANE OD SIEBIE
// 3. DODAĆ PLIK README.MD

// TO FIX
// 1. UMOŻLIWIĆ INTERAKCJĘ PO DODANIU TASKA ✅
// 2. Scroll na dól po dodaniu subtaska
// 3. Pojawianie sie modala ✅
// 4. Schowanie modala po przełączeniu widoku (PRAWDOPODOBNIE: przerobic na dwie podfunkcje -> chowającą i pokazującą)
