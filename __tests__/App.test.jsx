import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../src/components/App';

describe('<App />', () => {
  it('renders app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('selects second tab', () => {
    const wrapper = mount(<App />);
    const tabs = wrapper.find('[role="tab"]');
    tabs.filterWhere(n => n.text() === 'Title 2').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
