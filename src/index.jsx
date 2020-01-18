/* istanbul ignore file */
import React from 'react';
import { render } from 'react-dom';
import ReactPagination from './components/ReactPagination';

const HTML = () => (
  <div>
    <ReactPagination total={5} current={2} />
    <br />
    <ReactPagination total={20} current={2} />
    <br />
    <ReactPagination total={20} current={5} />
    <br />
    <ReactPagination total={20} current={4} />
    <br />
    <ReactPagination total={20} current={12} marginPagesDisplayed={2} />
    <br />
    <ReactPagination total={20} current={18} />
    <br />
  </div>
);

render(<HTML />, document.getElementById('root'));
