import View from './View';
import previewView from './previewView';
import icons from '../../img/icons.svg';
class ResultView extends View {
  _parentEl = document.querySelector('.results');
  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new ResultView();
