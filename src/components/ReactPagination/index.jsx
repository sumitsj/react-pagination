import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class ReactPagination extends PureComponent {
  renderPaginationItem = (pageNumber) => {
    const {
      itemClass, current, currentItemClass, onChange,
    } = this.props;
    const currentItemClassName = current === pageNumber ? currentItemClass : '';

    return (
      <button
        key={pageNumber}
        type="button"
        onClick={() => onChange(pageNumber)}
        className={`${itemClass} ${currentItemClassName}`}
      >
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

  renderLeftEllipsis = () => {
    const { ellipsisItemClass } = this.props;
    const showEllipsis = this.getLeftMarginItemEndPageNumber() + 1 < this.getStartPageNumber();
    return showEllipsis ? <span className={ellipsisItemClass}>...</span> : null;
  };

  renderRightEllipsis = () => {
    const { ellipsisItemClass } = this.props;
    const showEllipsis = this.getRightMarginItemStartPageNumber() - 1 > this.getEndPageNumber();
    return showEllipsis ? <span className={ellipsisItemClass}>...</span> : null;
  };

  render() {
    const { containerClass, previousItemClass, nextItemClass } = this.props;
    return (
      <div className={containerClass}>
        <button type="button" className={previousItemClass} disabled>
          Prev
        </button>
        {this.renderPaginationItems(
          this.getLeftMarginItemStartPageNumber(), this.getLeftMarginItemEndPageNumber(),
        )}
        {this.renderLeftEllipsis()}
        {this.renderPaginationItems(this.getStartPageNumber(), this.getEndPageNumber())}
        {this.renderRightEllipsis()}
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
  onChange: PropTypes.func.isRequired,
  current: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  marginPagesDisplayed: PropTypes.number,
  containerClass: PropTypes.string,
  itemClass: PropTypes.string,
  previousItemClass: PropTypes.string,
  nextItemClass: PropTypes.string,
  currentItemClass: PropTypes.string,
  ellipsisItemClass: PropTypes.string,
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
  ellipsisItemClass: 'react-pagination__ellipsis',
};

export default ReactPagination;
