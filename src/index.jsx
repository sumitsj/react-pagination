/* istanbul ignore file */
import React from 'react';
import { render } from 'react-dom';
import ReactPagination from './components/ReactPagination';

render(<ReactPagination total={15} />, document.getElementById('root'));
