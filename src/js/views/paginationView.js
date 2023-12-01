import View from './View';
import icons from '../../img/icons.svg';
class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultsPerPage
    );
    //strona 1, są inne strony
    if (this._data.page === 1 && numPages > 1) {
      return ` <button data-goto="${
        this._data.page + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${this._data.page + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    //ostatnia strona
    if (this._data.page === numPages && numPages > 1) {
      return `<button data-goto="${
        this._data.page - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>${this._data.page - 1}</span>
    </button>`;
    }
    //inne strony
    if (this._data.page < numPages) {
      return `<button data-goto="${
        this._data.page + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${this._data.page + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    <button data-goto="${
      this._data.page - 1
    }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${this._data.page - 1}</span>
    </button>
    `;
    }
    //strona 1, nie ma innych stron
    return '';
  }
}
export default new PaginationView();
