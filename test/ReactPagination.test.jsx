import React from 'react';
import { shallow } from 'enzyme';
import ReactPagination from '../src/components/ReactPagination';

describe('ReactPagination', () => {
  const component = shallow(<ReactPagination />);
  it('should render react pagination component', () => {
    expect(component).toHaveLength(1);
  });
});
