import React from 'react';
import { mount } from 'enzyme';

import App from '../src/components/App';

describe('<App />', () => {
  it('renders app', () => {
    const wrapper = mount(<App />);

    wrapper.find('[data-testid="tab-content"]');
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('selects second tab', () => {
    const wrapper = mount(<App />);
    const tab = wrapper.find('[data-testid="tab-title"]');

    expect(wrapper.render()).toMatchSnapshot();

    tab.at(1).simulate('click');
    expect(wrapper.render()).toMatchSnapshot();
  });
});
