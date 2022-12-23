import View from "./view";

class pinnedTaskView extends View {
  _parentElement = document.querySelector(".content");

  _generateMarkup(data) {
    document.querySelector(".content").classList.remove("blur");
    if (!data.length)
      return `
    <div class="listTask__container">
    <h2 class="message">No pinned tasks :(</h2>
    </div>
    `;
    const arr = data.filter((el) => el.pinned === true);
    if (!arr.length)
      return `
    <div class="listTask__container">
    <h2 class="message">No pinned tasks :(</h2>
    </div>
    `;

    let markup = `<div class="listTask__container">`;
    //prettier-ignore
    arr.forEach(el => markup += `<div class="listTask" data-id="${el.id}">
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
        if (e.target.closest(".navigation__element")?.dataset.element === "pinned") {
        handler();
      }
      });
  }
}

export default new pinnedTaskView();
