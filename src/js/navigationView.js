import View from "./view";

class navigationView extends View {
  _parentElement;

  _generateMarkup(data) {
    document.querySelector(".content").classList.remove("blur");
    this._parentElement = document.querySelector(".navigation");
    return `
      <ul class="navigation__list">
        <li class="navigation__element" data-element="list">
          <i class="navigation__icon fa-solid fa-list-ul"></i>
        </li>
        <li class="navigation__element" data-element="pinned">
          <i class="navigation__icon fa-solid fa-thumbtack"></i>
        </li>
        <li class="navigation__element" data-element="new">
          <i
            class="navigation__icon navigation__icon--add fa-solid fa-plus"
          ></i>
        </li>
        <li class="navigation__element" data-element="search">
          <i class="navigation__icon fa-solid fa-magnifying-glass"></i>
        </li>
        <li class="navigation__element" data-element="trash">
          <i class="navigation__icon fa-solid fa-trash-can"></i>
        </li>
      </ul>`;
  }

  addHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const element = e.target.closest(".navigation__element")?.dataset.element;
      if (!element);
      const newTaskContainer = document.querySelector(".newTask__container");
      if (!newTaskContainer.classList.contains("newTask__container--active")) {
        newTaskContainer.classList.add("newTask__container--active");
        newTaskContainer.classList.remove("newTask__container--unactive");
      } else {
        newTaskContainer.classList.remove("newTask__container--active");
        newTaskContainer.classList.add("newTask__container--unactive");
      }
      handler(element);
    });
  }
}

export default new navigationView();
