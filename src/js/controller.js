import * as model from "./model";
import navigationView from "./navigationView";
import newTaskView from "./newTaskView";

const controllNavigation = function (element) {
  model.state.currentView = element;
};

const init = function () {
  //renderowanie widoku startowego
  navigationView.render();
  newTaskView.render();

  //podpiananie event handlerow
  navigationView.addHandler(controllNavigation);

  // const btnAdd = document.querySelector(".navigation__icon--add");
  // btnAdd.addEventListener("click", function (e) {
  //   const newTaskContainer = document.querySelector(".newTask__container");
  //   if (!newTaskContainer.classList.contains("newTask__container--active")) {
  //     newTaskContainer.classList.add("newTask__container--active");
  //     newTaskContainer.classList.remove("newTask__container--unactive");
  //   } else {
  //     newTaskContainer.classList.remove("newTask__container--active");
  //     newTaskContainer.classList.add("newTask__container--unactive");
  //   }
  // });
};

init();
