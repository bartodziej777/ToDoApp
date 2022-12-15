import View from "./view";

class mainView extends View {
  _parentElement;

  _generateMarkup(data) {
    this._parentElement = document.querySelector(".app");
    return `<nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__element">
          <i class="navigation__icon fa-solid fa-list-ul"></i>
        </li>
        <li class="navigation__element">
          <i class="navigation__icon fa-solid fa-thumbtack"></i>
        </li>
        <li class="navigation__element">
          <i
            class="navigation__icon navigation__icon--add fa-solid fa-plus"
          ></i>
        </li>
        <li class="navigation__element">
          <i class="navigation__icon fa-solid fa-magnifying-glass"></i>
        </li>
        <li class="navigation__element">
          <i class="navigation__icon fa-solid fa-trash-can"></i>
        </li>
      </ul>
    </nav>
    <main class="main">
    </main>`;
  }
}

export default new mainView();
