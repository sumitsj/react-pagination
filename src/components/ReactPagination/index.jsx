import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ReactPagination extends PureComponent {
  renderPaginationItem = (pageNumber) => {
    const { itemClass, current, currentItemClass } = this.props;
    const currentItemClassName = current === pageNumber ? currentItemClass : '';

    return (
      <button key={pageNumber} type="button" className={`${itemClass} ${currentItemClassName}`}>
        {pageNumber}
      </button>
    );
  };

  getStartPageNumber = () => {
    const { current, pageRangeDisplayed, total } = this.props;
    let startPage = current - Math.floor(pageRangeDisplayed / 2);
    startPage = startPage > 0 ? startPage : 1;
    startPage = startPage + pageRangeDisplayed >= total ? total - pageRangeDisplayed : startPage;
    return startPage > 0 ? startPage : 1;
  };

  getEndPageNumber = () => {
    const { current, pageRangeDisplayed, total } = this.props;
    let endPage = current + Math.floor(pageRangeDisplayed / 2);
    endPage = endPage > total ? total : endPage;
    endPage = endPage <= pageRangeDisplayed ? pageRangeDisplayed : endPage;
    return endPage > total ? total : endPage;
  };

  renderPaginationItems = (startPage, endPage) => {
    const items = [];
    const { total } = this.props;

    if (startPage < 1 || endPage > total) return items;

    // eslint-disable-next-line no-plusplus
    for (let pageNumber = startPage; pageNumber <= endPage; pageNumber++) {
      items.push(this.renderPaginationItem(pageNumber));
    }
    return items;
  };

  getLeftMarginItemStartPageNumber = () => {
    const { marginPagesDisplayed } = this.props;
    return this.getStartPageNumber() - marginPagesDisplayed > 0 ? 1 : 0;
  };

  getLeftMarginItemEndPageNumber = () => {
    const { marginPagesDisplayed } = this.props;
    return marginPagesDisplayed < this.getStartPageNumber() ? marginPagesDisplayed : 0;
  };

  getRightMarginItemStartPageNumber = () => {
    const { marginPagesDisplayed, total } = this.props;
    const startPage = total - marginPagesDisplayed + 1;
    return this.getEndPageNumber() < startPage ? startPage : 0;
  };

  getRightMarginItemEndPageNumber = () => {
    const { marginPagesDisplayed, total } = this.props;
    const startPage = total - marginPagesDisplayed + 1;
    return this.getEndPageNumber() < startPage ? total : 0;
  };

  render() {
    const { containerClass, previousItemClass, nextItemClass } = this.props;
    return (
      <div className={containerClass}>
        <button type="button" className={previousItemClass} disabled>
          Previous
        </button>
        {this.renderPaginationItems(
          this.getLeftMarginItemStartPageNumber(), this.getLeftMarginItemEndPageNumber(),
        )}
        {this.renderPaginationItems(this.getStartPageNumber(), this.getEndPageNumber())}
        {this.renderPaginationItems(
          this.getRightMarginItemStartPageNumber(), this.getRightMarginItemEndPageNumber(),
        )}
        <button type="button" className={nextItemClass} disabled>
          Next
        </button>
      </div>
    );
  }
}

ReactPagination.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  marginPagesDisplayed: PropTypes.number,
  containerClass: PropTypes.string,
  itemClass: PropTypes.string,
  previousItemClass: PropTypes.string,
  nextItemClass: PropTypes.string,
  currentItemClass: PropTypes.string,
};

ReactPagination.defaultProps = {
  current: 1,
  pageRangeDisplayed: 5,
  marginPagesDisplayed: 1,
  containerClass: 'react-pagination__container',
  itemClass: 'react-pagination__item',
  previousItemClass: 'react-pagination__previous',
  nextItemClass: 'react-pagination__next',
  currentItemClass: 'react-pagination__current',
};

export default ReactPagination;
