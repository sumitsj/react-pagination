import React from 'react';
import { shallow } from 'enzyme';
import ReactPagination from '../src/components/ReactPagination';

describe('ReactPagination', () => {
  const component = shallow(<ReactPagination total={10} current={3} />);
  it('should render react pagination component', () => {
    expect(component).toHaveLength(1);
    expect(component.find('.react-pagination__container')).toHaveLength(1);
  });

  it('should render 10 pagination items', () => {
    expect(component.find('button.react-pagination__item')).toHaveLength(10);
  });

  it('should render current pagination items with currentItemClass', () => {
    expect(component.find('button.react-pagination__current')).toHaveLength(1);
    expect(component.find('button.react-pagination__item').at(2).props().className).toContain('react-pagination__current');
  });

  it('should render Previous pagination items', () => {
    expect(component.find('button.react-pagination__previous')).toHaveLength(1);
  });

  it('should render Next pagination items', () => {
    expect(component.find('button.react-pagination__next')).toHaveLength(1);
  });
});
