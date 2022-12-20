import View from "./view";

class listTaskView extends View {
  _parentElement;

  _generateMarkup(data) {
    this._parentElement = document.querySelector(".content");
    if (!data) return;
    //prettier-ignore
    return `
    <div class="listTask__container">
        ${data.foreach(el => `<div class="listTask">
        <div class="listTask__content">
            <div class="listTask__name">${el.name}</div>
            <div class="listTask__info">with ${el.subtasks.length} subtask(s)</div>
            <div class="listTask__progress">
              <div class="listTask__progress-background"></div>
              <p class="listTask__progress-value">${el.subtasks.filter(el => el.done === true).length}/${el.subtasks.length}</p>
            </div>
        </div>
        <div class="listTask__side">
            <i class="listTask__icon fa-solid fa-check"></i>
            <i class="listTask__icon ${el.pinned ? "listTask__icon--active" : ""} fa-solid fa-thumbtack"></i>
        </div>
        </div>`)}
    </div>
    `;
  }
}

export default new listTaskView();
