import React from 'react';

import Enzyme,{shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Coffees from './Coffees';
import { CafeContext } from '../Cafe/Cafe';
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
});

