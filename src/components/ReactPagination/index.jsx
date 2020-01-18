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

  renderPaginationItems = () => {
    const { total } = this.props;
    const items = [];

    // eslint-disable-next-line no-plusplus
    for (let pageNumber = 1; pageNumber <= total; pageNumber++) {
      items.push(this.renderPaginationItem(pageNumber));
    }
    return items;
  };

  render() {
    const { containerClass, previousItemClass, nextItemClass } = this.props;
    return (
      <div className={containerClass}>
        <button type="button" className={previousItemClass} disabled>
          Previous
        </button>
        {this.renderPaginationItems()}
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
  containerClass: PropTypes.string,
  itemClass: PropTypes.string,
  previousItemClass: PropTypes.string,
  nextItemClass: PropTypes.string,
  currentItemClass: PropTypes.string,
};

ReactPagination.defaultProps = {
  current: 1,
  containerClass: 'react-pagination__container',
  itemClass: 'react-pagination__item',
  previousItemClass: 'react-pagination__previous',
  nextItemClass: 'react-pagination__next',
  currentItemClass: 'react-pagination__current',
};

export default ReactPagination;
