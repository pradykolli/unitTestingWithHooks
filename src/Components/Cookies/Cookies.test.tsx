import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cookies from './Cookies';

Enzyme.configure({ adapter: new Adapter() });

describe('<TestComponent />', () => {
  let wrapper = Enzyme.shallow(<Cookies />);
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Cookies />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Count Up', () => {
    it('calls setCount with count + 1', () => {
      wrapper.find('#count-up').props().onClick();
      expect(setState).toHaveBeenCalledWith(31);
    });
  });

  describe('Count Down', () => {
    it('calls setCount with count - 1', () => {
      wrapper.find('#count-down').props().onClick();
      expect(setState).toHaveBeenCalledWith(29);
    });
  });

});