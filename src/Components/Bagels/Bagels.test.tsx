import React from 'react';
import Enzyme,{shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Bagels from './Bagels'
import * as CafeContext from '../Cafe/CafeContext'
import mockContext,{mockStateDispatch} from '../testHelpers/testHelper'
Enzyme.configure({ adapter: new Adapter() })
describe("Cafe component renders Bagels", () => {
  it(`renders Bagels in app component`, () => {
      const wrapper = shallow(<Bagels />);
    expect(wrapper.find('h1').text()).toEqual("Bagels");
  });
  it(`gets the initial State value.`, () => {
    const wrapper = shallow(<Bagels />);
    expect(wrapper.find('h2').text()).toEqual("Available Bagels 30");
    })
    it('Check if button calls dispatch from mock context', () => {
        const wrapper = mount(
          <CafeContext.default.Provider value={mockContext} >
            <Bagels />
          </CafeContext.default.Provider>
        )
        expect(wrapper.find('h2').text()).toBe("Available Bagels 30");
        wrapper.find('.buyButton').simulate('click');
        expect(mockContext.dispatch.mock.calls.length).toBe(1);
        wrapper.find('.addButton').simulate('click');
        expect(mockContext.dispatch.mock.calls.length).toBe(2);
    })
    
    it('Check if action gets performed and changes the state', async () => {
      
      const wrapper = mount(
        <CafeContext.default.Provider value={mockStateDispatch}>
          <Bagels />
        </CafeContext.default.Provider>
      );

      await wrapper.find(".buyButton").simulate("click");
      expect(mockContext.dispatch).toBeCalledWith({type:'buyBagel'});
      // expect(mockStateDispatch.state.Coffees).toBe(19);

      await wrapper.find(".addButton").simulate("click");
      expect(mockContext.dispatch).toBeCalledWith({type:'addBagel'});
      // expect(mockStateDispatch.state.Coffees).toBe(20);

    })
});

