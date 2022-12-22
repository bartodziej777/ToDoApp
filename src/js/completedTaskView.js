import View from "./view";

class completedTaskView extends View {
  _parentElement = document.querySelector(".content");

  _generateMarkup(data) {
    if (!data.length)
      return `
    <div class="listTask__container">
    <h2 class="message">No completed tasks :(</h2>
    </div>
    `;

    let markup = `<div class="listTask__container">`;
    //prettier-ignore
    data.forEach(el => markup += `<div class="listTask" data-id="${el.id}">
    <div class="listTask__content" >
        <div class="listTask__name">${el.name}</div>
        <div class="listTask__info">with ${el.subtasks.length} subtask(s)</div>
        <div class="listTask__progress">
          <div class="listTask__progress-background" style="width:${el.subtasks.filter(el => el.done === true).length}%"></div>
          <p class="listTask__progress-value">${el.subtasks.filter(el => el.done === true).length}/${el.subtasks.length}</p>
        </div>
    </div>
    <div class="listTask__side">
        <i class="listTask__icon listTask__icon-restore fa-solid fa-rotate-left"></i>
    </div>
    </div>`);
    markup += `
    <button class="btn__clean">Clean completed tasks</button>
    </div>
    `;
    return markup;
  }

  addHandlerToggle(handler) {
    document
      .querySelector(".navigation__list")
      .addEventListener("click", function (e) {
        if (
          e.target.closest(".navigation__element")?.dataset.element === "trash"
        ) {
          handler();
        }
      });
  }

  addHanlderRestore(handler) {
    document.querySelector(".content").addEventListener("click", function (e) {
      if (!e.target.closest(".listTask__icon-restore")) return;
      const id = e.target.closest(".listTask")?.dataset.id;
      if (!id) return;

      handler(id);
    });
  }

  addHandlerClean(handler) {
    document.querySelector(".content").addEventListener("click", function (e) {
      if (e.target.closest(".btn__clean")) {
        handler();
      }
    });
  }
}

export default new completedTaskView();
