import React from 'react';

import Enzyme,{shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Coffees from './Coffees';
import * as CafeContext from '../Cafe/CafeContext'
import mockContext,{mockStateDispatch} from '../testHelpers/testHelper'
Enzyme.configure({ adapter: new Adapter() })
describe("App component renders", () => {
  it(`renders Coffees in app component`, () => {
    const wrapper = shallow(<Coffees />);
    expect(wrapper.find('h1').text()).toEqual("Coffees");
  });
  it(`gets the initial State value.`, () => {
    const wrapper = shallow(<Coffees />);
    expect(wrapper.find('h2').text()).toEqual("Available Coffees 45");
    })
    it('Check if button calls dispatch from mock context', () => {
        const wrapper = mount(
          <CafeContext.default.Provider value={mockContext} >
            <Coffees />
          </CafeContext.default.Provider>
        )
        expect(wrapper.find('h2').text()).toBe("Available Coffees 20");
        wrapper.find('.buyButton').simulate('click');
        expect(mockContext.dispatch.mock.calls.length).toBe(1);
        wrapper.find('.addButton').simulate('click');
        expect(mockContext.dispatch.mock.calls.length).toBe(2);
    })
    
    it('Check if action gets performed and changes the state', async () => {
      
      const wrapper = mount(
        <CafeContext.default.Provider value={mockStateDispatch}>
          <Coffees />
        </CafeContext.default.Provider>
      );

      await wrapper.find(".buyButton").simulate("click");
      expect(mockContext.dispatch).toBeCalledWith({type:'buyCoffee'});
      // expect(mockStateDispatch.state.Coffees).toBe(19);

      await wrapper.find(".addButton").simulate("click");
      expect(mockContext.dispatch).toBeCalledWith({type:'addCoffee'});
      // expect(mockStateDispatch.state.Coffees).toBe(20);

    })
});

