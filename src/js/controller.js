const btnAdd = document.querySelector(".navigation__icon--add");

btnAdd.addEventListener("click", function (e) {
  const newTaskContainer = document.querySelector(".newTask__container");

  if (!newTaskContainer.classList.contains("newTask__container--active")) {
    newTaskContainer.classList.add("newTask__container--active");
    newTaskContainer.classList.remove("newTask__container--unactive");
  } else {
    newTaskContainer.classList.remove("newTask__container--active");
    newTaskContainer.classList.add("newTask__container--unactive");
  }
});
