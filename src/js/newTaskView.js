import View from "./view";

class newTaskView extends View {
  _parentElement;
  _containerElement;
  _subtaskId;

  _generateMarkup() {
    document.querySelector(".content").classList.remove("blur");
    this._parentElement = document.querySelector(".modal");
    this._clear();
    this._subtaskId = 1;
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
                data-field-id="1"
              />
              <i class="subtask__btn fa-solid fa-plus" data-btn-id="1"></i>
            </div>
          </div>
          <input type="submit" value="Add" class="newTask__submit" />
        </form>
      </div>`;
  }

  toggleView(action = true) {
    if (action === false) {
      this._containerElement.classList.remove("newTask__container--active");
      this._containerElement.classList.add("newTask__container--unactive");
      document.querySelector(".content").classList.remove("blur");
      return;
    }

    this._containerElement = document.querySelector(".newTask__container");
    //prettier-ignore
    if (!this._containerElement.classList.contains("newTask__container--active")) {
      this._containerElement.classList.add("newTask__container--active");
      this._containerElement.classList.remove("newTask__container--unactive");
      document.querySelector('.content').classList.add("blur");
      return;
    }
    this._containerElement.classList.remove("newTask__container--active");
    this._containerElement.classList.add("newTask__container--unactive");
    document.querySelector(".content")?.classList.remove("blur");
  }

  addHandlerToggle(handler) {
    document
      .querySelector(".navigation__list")
      .addEventListener("click", function (e) {
        //prettier-ignore
        if (e.target.closest(".navigation__element")?.dataset.element === "new") {
          handler();
        }
      });
  }

  addHandlerSubtask(handler) {
    document
      .querySelector(".subtask__container")
      .addEventListener("click", function (e) {
        const btn = e.target.closest(".subtask__btn");
        if (!btn) return;
        const id = btn.dataset?.btnId;
        handler(id);
      });
  }

  addSubtask(id) {
    const field = document.querySelector(`[data-field-id="${id}"]`);
    const btn = document.querySelector(`[data-btn-id="${id}"]`);
    if (!field.value.length) return;

    field.classList.toggle("subtask__field--added");
    btn.classList.toggle("subtask__btn--added");
    if (!field.classList.contains("subtask__field--added")) {
      field.disabled = false;
      return;
    } else {
      field.disabled = true;
    }

    if (id != this._subtaskId) return;
    this._newSubtask();
  }

  _newSubtask() {
    this._subtaskId++;
    const element = document.querySelector(".subtask__container");
    const markup = `
    <div class="subtask">
      <input
        type="text"
        class="subtask__field"
        placeholder="Subtask name"
        data-field-id="${+this._subtaskId}"
      />
      <i class="subtask__btn fa-solid fa-plus" data-btn-id="${+this
        ._subtaskId}"></i>
    </div>`;

    element.insertAdjacentHTML("beforeend", markup);
  }

  addHandlerTask(handler) {
    const btn = document.querySelector(".newTask__submit");
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (!document.querySelector(".newTask__field").value.length) return;

      const taskName = document.querySelector(".newTask__field").value;
      const subtaskFields = [...document.querySelectorAll(".subtask__field")];
      const subtasks = subtaskFields
        .filter((el) => el.value.length > 0 && el.disabled)
        .map((el) => el.value)
        .map(function (el) {
          const obj = {
            name: el,
            done: false,
          };
          return obj;
        });

      const obj = {
        taskName,
        subtasks,
      };

      handler(obj);
    });
  }
}

export default new newTaskView();
