import React from 'react';
import { shallow } from 'enzyme';
import ReactPagination from '../src/components/ReactPagination';

describe('ReactPagination', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ReactPagination
      total={20}
      current={5}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
    />);
  });

  describe('HTML Structure', () => {
    it('should render react pagination component', () => {
      expect(component).toHaveLength(1);
      expect(component.find('.react-pagination__container')).toHaveLength(1);
    });

    it('should render 7 pagination items', () => {
      expect(component.find('button.react-pagination__item')).toHaveLength(7);
    });

    it('should render current pagination items with currentItemClass', () => {
      expect(component.find('button.react-pagination__current')).toHaveLength(1);
      expect(component.find('button.react-pagination__item').at(3).props().className)
        .toContain('react-pagination__current');
    });

    it('should render Previous pagination items', () => {
      expect(component.find('button.react-pagination__previous')).toHaveLength(1);
    });

    it('should render Next pagination items', () => {
      expect(component.find('button.react-pagination__next')).toHaveLength(1);
    });
  });

  describe('Methods', () => {
    describe('getStartPageNumber', () => {
      it('should return start page as 4', () => {
        expect(component.instance().getStartPageNumber()).toEqual(3);
      });

      it('should return start page as 1', () => {
        component.setProps({ current: 2 });
        expect(component.instance().getStartPageNumber()).toEqual(1);
      });

      it('should return start page as 16', () => {
        component.setProps({ current: 19 });
        expect(component.instance().getStartPageNumber()).toEqual(15);
      });

      it('should return start page as 13', () => {
        component.setProps({ current: 15 });
        expect(component.instance().getStartPageNumber()).toEqual(13);
      });
    });

    describe('getEndPageNumber', () => {
      it('should return end page as 7', () => {
        expect(component.instance().getEndPageNumber()).toEqual(7);
      });

      it('should return end page as 20', () => {
        component.setProps({ current: 19 });
        expect(component.instance().getEndPageNumber()).toEqual(20);
      });

      it('should return end page as 5', () => {
        component.setProps({ current: 2 });
        expect(component.instance().getEndPageNumber()).toEqual(5);
      });
    });

    describe('getLeftMarginItemStartPageNumber', () => {
      it('should return start page as 1 ', () => {
        expect(component.instance().getLeftMarginItemStartPageNumber()).toEqual(1);
      });

      it('should return start page as 0 ', () => {
        component.setProps({ current: 2 });
        expect(component.instance().getLeftMarginItemStartPageNumber()).toEqual(0);
      });
    });

    describe('getLeftMarginItemEndPageNumber', () => {
      it('should return end page as 1 ', () => {
        expect(component.instance().getLeftMarginItemEndPageNumber()).toEqual(1);
      });

      it('should return end page as 0 ', () => {
        component.setProps({ current: 2 });
        expect(component.instance().getLeftMarginItemEndPageNumber()).toEqual(0);
      });
    });

    describe('getRightMarginItemStartPageNumber', () => {
      it('should return start page as 20', () => {
        expect(component.instance().getRightMarginItemStartPageNumber()).toEqual(20);
      });

      it('should return start page as 0', () => {
        component.setProps({ current: 18 });
        expect(component.instance().getRightMarginItemStartPageNumber()).toEqual(0);
      });
    });

    describe('getRightMarginItemEndPageNumber', () => {
      it('should return last page as end page', () => {
        component.setProps({ current: 10 });
        expect(component.instance().getRightMarginItemEndPageNumber()).toEqual(20);
      });

      it('should return end page as 0', () => {
        component.setProps({ current: 18 });
        expect(component.instance().getRightMarginItemEndPageNumber()).toEqual(0);
      });
    });
  });
});
