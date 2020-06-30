import React from 'react';

import Enzyme,{shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';
Enzyme.configure({ adapter: new Adapter() })
describe("App component renders", () => {
  it('renders header in app component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header').exists()).toBeTruthy();
  });
});

