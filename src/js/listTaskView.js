import View from "./view";

class listTaskView extends View {
  _parentElement;

  _generateMarkup(data) {
    this._parentElement = document.querySelector(".content");
    if (!data.length) return "";

    let markup = `<div class="listTask__container">`;
    //prettier-ignore
    data.forEach(el => markup += `<div class="listTask">
    <div class="listTask__content" data-id=${el.id}>
        <div class="listTask__name">${el.name}</div>
        <div class="listTask__info">with ${el.subtasks.length} subtask(s)</div>
        <div class="listTask__progress">
          <div class="listTask__progress-background" style="width:${el.subtasks.filter(el => el.done === true).length}%"></div>
          <p class="listTask__progress-value">${el.subtasks.filter(el => el.done === true).length}/${el.subtasks.length}</p>
        </div>
    </div>
    <div class="listTask__side">
        <i class="listTask__icon fa-solid fa-check"></i>
        <i class="listTask__icon ${el.pinned ? "listTask__icon--active" : ""} fa-solid fa-thumbtack"></i>
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
}

export default new listTaskView();
