import View from "./view";

class listTaskView extends View {
  _parentElement;

  _generateMarkup(data) {
    this._parentElement = document.querySelector(".content");
    if (!data.length)
      return `
    <div class="listTask__container">
    <h2 class="message">No active tasks :(</h2>
    </div>
    `;

    let markup = `<div class="listTask__container">`;
    //prettier-ignore
    data.forEach(el => markup += `<div class="listTask" data-id="${el.id}">
    <div class="listTask__content" >
        <div class="listTask__name">${el.name}</div>
        <div class="listTask__info">with ${el.subtasks.length} subtask(s)</div>
        <div class="listTask__progress">
          <div class="listTask__progress-background" style="width:${el.subtasks.length ? (el.subtasks.filter(el => el.done === true).length / el.subtasks.length)*100 : 100}%"></div>
          <p class="listTask__progress-value">${el.subtasks.filter(el => el.done === true).length}/${el.subtasks.length}</p>
        </div>
    </div>
    <div class="listTask__side">
        <i class="listTask__icon listTask__icon-complete fa-solid fa-check"></i>
        <i class="listTask__icon listTask__icon-pin ${el.pinned ? "listTask__icon--active" : ""} fa-solid fa-thumbtack"></i>
    </div>
    </div>`);
    markup += `</div>`;
    return markup;
  }

  addHandlerToggle(handler) {
    document
      .querySelector(".navigation__list")
      .addEventListener("click", function (e) {
        //prettier-ignore
        if (e.target.closest(".navigation__element")?.dataset.element === "list") {
          handler();
        }
      });
  }

  addHandlerPin(handler) {
    document.querySelector(".content").addEventListener("click", function (e) {
      if (!e.target.closest(".listTask__icon-pin")) return;
      const id = e.target.closest(".listTask")?.dataset.id;
      if (!id) return;

      handler(id);
    });
  }

  addHanlderComplete(handler) {
    document.querySelector(".content").addEventListener("click", function (e) {
      if (!e.target.closest(".listTask__icon-complete")) return;
      const id = e.target.closest(".listTask")?.dataset.id;
      if (!id) return;

      handler(id);
    });
  }
}

export default new listTaskView();
