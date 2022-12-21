import View from "./view";

class listTaskView extends View {
  _parentElement;

  _generateMarkup(data) {
    this._parentElement = document.querySelector(".content");
    if (!data.length) return "";

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
        <i class="listTask__icon fa-solid fa-check"></i>
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
    // document
    //   .querySelector(".listTask__icon-pin")
    //   .addEventListener("click", function (e) {
    //     const id = e.target.closest(".listTask")?.dataset.id;
    //     if (!id) return;

    //     handler(id);
    //   });
    //[...document.querySelectorAll('.listTask__icon-pin')].forEach(el => el.addEventListener('click'))
    document.querySelector(".content").addEventListener("click", function (e) {
      const id = e.target.closest(".listTask")?.dataset.id;
      if (!id) return;

      handler(id);
    });
  }
}

export default new listTaskView();
