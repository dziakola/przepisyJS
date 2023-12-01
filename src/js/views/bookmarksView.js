import View from './View';
import icons from '../../img/icons.svg';
import previewView from './previewView';
class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new BookmarksView();
