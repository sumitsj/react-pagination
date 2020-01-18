import React, { PureComponent } from 'react';

class ReactPagination extends PureComponent {
  render() {
    return (
      <div>
        <button type="button">Prev</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">4</button>
        <button type="button">Next</button>
      </div>
    );
  }
}

ReactPagination.propTypes = {};

ReactPagination.defaultProps = {};

export default ReactPagination;
