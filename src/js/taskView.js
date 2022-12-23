import View from "./view";

class taskView extends View {
  _parentElement = document.querySelector(".wrapper");

  _generateMarkup(data) {
    if (!data) return;
    let markup = "";
    //prettier-ignore
    markup += `<div class="task" data-id="${data.id}">
      <div class="task__top">
        <div class="task__content" >
          <div class="task__name">${data.name}</div>
          <div class="task__info">with ${data.subtasks.length} subtask(s)</div>
          <div class="task__progress">
            <div class="task__progress-background" style="width:${data.subtasks.filter(el => el.done === true).length}%"></div>
            <p class="task__progress-value">${data.subtasks.filter(el => el.done === true).length}/${data.subtasks.length}</p>
          </div>
        </div>
        <div class="task__side">
          <i class="task__icon fa-solid fa-xmark"></i>
          <i class="task__icon ${data.pinned ? "listTask__icon--active" : ""} fa-solid fa-thumbtack"></i>
        </div>
      </div>
      <div class="task__bottom">`;

    data.subtasks.forEach((el) => {
      markup += `<div class="task__element">
          <p class="task__element-name ${
            el.done ? "task__element-name--active" : ""
          }">${el.name}</p>
          <i class="task__element-btn ${
            el.done ? "fa-regular fa-square-check" : "fa-regular fa-square"
          }"></i>
        </div>`;
    });
    markup += `</div></div>`;
    return markup;
  }

  addHandler(handler) {
    document.querySelector(".content").addEventListener("click", function (e) {
      if (!e.target.closest(".listTask")) return;
      const id = e.target.closest(".listTask")?.dataset.id;
      if (!id) return;
      handler(id);
    });
  }
}

export default new taskView();
