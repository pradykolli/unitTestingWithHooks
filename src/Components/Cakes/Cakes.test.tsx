import React from 'react';
import Enzyme,{shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Cakes from './Cakes'
import * as CafeContext from '../Cafe/CafeContext'
import mockContext,{mockStateDispatch} from '../testHelpers/testHelper'
import { cafeReducer } from '../Cafe/CafeReducer';
import { wait } from '@testing-library/react';
Enzyme.configure({ adapter: new Adapter() })
describe("App component renders", () => {
  it(`renders Cakes in app component`, () => {
      const wrapper = shallow(<Cakes />);
    expect(wrapper.find('h1').text()).toEqual("Muffins");
  });
  it(`gets the initial State value.`, () => {
    const wrapper = shallow(<Cakes />);
    expect(wrapper.find('h2').text()).toEqual("Available Muffins 10");
    })
    it('Check if button calls dispatch from mock context', () => {
        const wrapper = mount(
          <CafeContext.default.Provider value={mockContext} >
            <Cakes />
          </CafeContext.default.Provider>
        )
        expect(wrapper.find('h2').text()).toBe("Available Muffins 10");
        wrapper.find('.buyButton').simulate('click');
        expect(mockContext.dispatch.mock.calls.length).toBe(1);
        wrapper.find('.addButton').simulate('click');
        expect(mockContext.dispatch.mock.calls.length).toBe(2);
    })
    
    it('Check if action gets performed and changes the state', async () => {
      
      const wrapper = mount(
        <CafeContext.default.Provider value={mockStateDispatch}>
          <Cakes />
        </CafeContext.default.Provider>
      );

      await wrapper.find(".buyButton").simulate("click");
      expect(mockContext.dispatch).toBeCalledWith({type:'buyCake'});
      // expect(mockStateDispatch.state.Coffees).toBe(19);

      await wrapper.find(".addButton").simulate("click");
      expect(mockContext.dispatch).toBeCalledWith({type:'addCake'});
      // expect(mockStateDispatch.state.Coffees).toBe(20);

    })
});

