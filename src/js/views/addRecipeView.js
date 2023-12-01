import View from './View';
import icons from '../../img/icons.svg';
class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _message = 'Recipe was uploaded';
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  _addHandlerCloseWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
  addHandlerUpload(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }

  _generateMarkup() {}
}
export default new AddRecipeView();
