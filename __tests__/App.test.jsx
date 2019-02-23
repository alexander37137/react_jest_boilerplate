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
    const wrapper = mount(<App />);

    const tabs = wrapper.find('[data-test="tab-title"] li');
    tabs.at(1).simulate('click');

    const updatedTabs = wrapper.find('[data-test="tab-title"] li');
    expect(updatedTabs.at(0)).toMatchSelector('[aria-selected="false"]');
    expect(updatedTabs.at(1)).toMatchSelector('[aria-selected="true"]');
  });

  it('delete first tab', () => {
    const wrapper = mount(<App />);

    const deleteButton = wrapper.find('[data-test="delete-tab"]');
    deleteButton.simulate('click');

    const tabs = wrapper.find('[data-test="tab-title"] li');
    expect(tabs.length).toBe(1);
  });
});
