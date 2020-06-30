import React from 'react';

import Enzyme,{shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Cafe from './Cafe';
Enzyme.configure({ adapter: new Adapter() })
describe("App component renders", () => {
  it(`renders Prady's Cafe in app component`, () => {
    const wrapper = shallow(<Cafe />);
    expect(wrapper.find('h1').text()).toEqual("Prady's Cafe");
  });
  it(`Render All three components in cafe`, () => {
    const wrapper = shallow(<Cafe />);
    expect(wrapper.find("Cakes").exists()).toBeTruthy;
    expect(wrapper.find("Coffees").exists()).toBeTruthy;
    expect(wrapper.find("Bagels").exists()).toBeTruthy;
})
});

