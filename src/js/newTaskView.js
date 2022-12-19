import View from "./view";

class newTaskView extends View {
  _parentElement;
  _containerElement;

  _generateMarkup() {
    this._parentElement = document.querySelector(".main");
    return `<div class="newTask__container">
        <form action="_" class="newTask">
          <h2 class="newTask__h2">New task</h2>
          <input type="text" class="newTask__field" placeholder="Task name" />
          <h3 class="newTask__h3">Subtasks</h3>
          <div class="subtask__container">
            <div class="subtask">
              <input
                type="text"
                class="subtask__field"
                placeholder="Subtask name"
                data-id="1"
              />
              <i class="subtask__btn fa-solid fa-plus" data-id="1"></i>
            </div>
          </div>
          <input type="submit" value="Add" class="newTask__submit" />
        </form>
      </div>`;
  }

  addHandler(handler) {
    document
      .querySelector(".navigation__list")
      .addEventListener("click", function (e) {
        if (
          !e.target.closest(".navigation__element")?.dataset.element === "new"
        )
          return;
        handler();
      });
  }

  toggleView() {
    this._containerElement = document.querySelector(".newTask__container");
    if (
      !this._containerElement.classList.contains("newTask__container--active")
    ) {
      this._containerElement.classList.add("newTask__container--active");
      this._containerElement.classList.remove("newTask__container--unactive");
      return;
    }
    this._containerElement.classList.remove("newTask__container--active");
    this._containerElement.classList.add("newTask__container--unactive");
  }
}

export default new newTaskView();
