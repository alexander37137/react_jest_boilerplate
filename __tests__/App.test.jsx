import React from 'react';
import { mount } from 'enzyme';

import App from '../src/components/App';

describe('<App />', () => {
  it('renders app', () => {
    const wrapper = mount(<App />);

    const tabs = wrapper.find('[data-test="tab-title"] li');
    expect(tabs.at(0)).toMatchSelector('[aria-selected="true"]');
  });

  it('selects second tab', () => {
    let wrapper = mount(<App />);

    let tabs = wrapper.find('[data-test="tab-title"] li');

    tabs.at(1).simulate('click');

    wrapper = wrapper.update();
    tabs = wrapper.find('[data-test="tab-title"] li');
    expect(tabs.at(0)).toMatchSelector('[aria-selected="false"]');
    expect(tabs.at(1)).toMatchSelector('[aria-selected="true"]');
  });
});
