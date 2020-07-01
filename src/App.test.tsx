import React from 'react';

import Enzyme,{shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';
Enzyme.configure({ adapter: new Adapter() })
describe("App component renders", () => {
  it('app component Matches SnapShot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

