/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
/* istanbul ignore file */
import React, { useState } from 'react';
import { render } from 'react-dom';
import ReactPagination from './components/ReactPagination';

const WorkingExample = () => {
  const [selectedPageNumber, setSelectedPageNumber] = useState(5);
  return (
    <div>
      <h3 style={{ fontFamily: 'Verdana' }}>Working Example</h3>
      <ReactPagination
        total={20}
        current={selectedPageNumber}
        onChange={(pageNumber) => setSelectedPageNumber(pageNumber)}
      />
    </div>
  );
};

const StaticSamples = () => {
  const propsArray = [{ current: 2, total: 5 }, { current: 2, total: 10 },
    { current: 8, total: 10 }, { current: 5, total: 20 },
    { current: 12, total: 20, marginPagesDisplayed: 2 }];
  return (
    <div>
      <h4 style={{ fontFamily: 'Verdana' }}>Possible Visual States</h4>
      <pre>
        [Our pagination component would be in one of the below possible states in future.]
      </pre>
      <br />
      {
        propsArray.map((props) => (
          <>
            <ReactPagination
              {...props}
              onChange={(pageNumber) => alert(pageNumber)}
            />
            <br />
            <br />
          </>
        ))
      }
    </div>
  );
};

const Main = () => (
  <div>
    <WorkingExample />
    <hr />
    <StaticSamples />
  </div>
);

render(<Main />, document.getElementById('root'));
