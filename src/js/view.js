export default class View {
  _data;
  _markup;

  render(data) {
    this._data = data;
    this._markup = this._generateMarkup(this._data);
    this._parentElement.innerHTML = this._markup;
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
}
