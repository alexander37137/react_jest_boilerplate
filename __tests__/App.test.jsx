import React from 'react';
import { mount } from 'enzyme';

import App from '../src/components/App';

describe('<App />', () => {
  it('renders app', () => {
    const wrapper = mount(<App />);

    const tabContent = wrapper.find('[data-testid="tab-content"]');
    expect(tabContent).toMatchSnapshot();
  });

  it('selects second tab', () => {
    const wrapper = mount(<App />);
    const tab = wrapper.find('[data-testid="tab-title"]');
    tab.at(1).simulate('click');
    const tabContent = wrapper.find('[data-testid="tab-content"]');
    expect(tabContent).toMatchSnapshot();
  });
});
