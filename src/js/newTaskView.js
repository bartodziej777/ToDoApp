import View from "./view";

class newTaskView extends View {
  _parentElement;

  _generateMarkup(data) {
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

  _updateSubtask() {}
}

export default new newTaskView();
