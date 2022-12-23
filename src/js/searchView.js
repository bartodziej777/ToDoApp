import View from "./view";

class searchView extends View {
  _parentElement = document.querySelector(".content");

  _generateMarkup() {
    return `<div class="search__container">
    <div class="search">
      <input
        type="serach"
        class="search__field"
        placeholder="Type task name"
      />
      <button class="search__btn">Search</button>
    </div>
    <div class="search__results"></div>
  </div>`;
  }

  addHandlerToggle(handler) {
    //console.log(document.querySelector(".navigaiton__list"));
    document
      .querySelector(".navigation__list")
      .addEventListener("click", function (e) {
        //prettier-ignore
        if (e.target.closest(".navigation__element")?.dataset.element === "search") {
              handler();
            }
      });
  }

  addHandlerSearch(handler) {
    document.querySelector(".content").addEventListener("click", function (e) {
      if (e.target.closest(".search__btn")) {
        const content = document.querySelector(".search__field").value;
        handler(content);
      }
    });
  }

  renderResults(data) {
    console.log(!data.length);
    const element = document.querySelector(".search__results");
    let markup = ``;
    if (!data.length) {
      element.innerHTML = `
    <h2 class="message">no search results found</h2>
    `;
      return;
    }

    markup = `<div class="listTask__container">`;
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
    element.innerHTML = markup;
  }
}

export default new searchView();
