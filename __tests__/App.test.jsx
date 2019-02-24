import React from 'react';
import { mount } from 'enzyme';

import App from '../src/components/App';

jest.mock('js-cookie', () => {
  const cookiesStorage = {};
  return {
    set(key, value) {
      cookiesStorage[key] = value;
    },
    get(key) {
      return cookiesStorage[key];
    },
  };
});

const pageObject = wrapper => ({
  firstTab: () => wrapper.find('li[data-test="tab-title"]').at(0),
  secondTab: () => wrapper.find('li[data-test="tab-title"]').at(1),
});

const mountApp = () => {
  const wrapper = mount(<App />);
  return pageObject(wrapper);
};

const reloadApp = mountApp;

describe('<App />', () => {
  it('renders app', () => {
    const wrapper = mount(<App />);

    const tabs = wrapper.find('li[data-test="tab-title"]');
    expect(tabs.at(0)).toHaveProp('aria-selected', 'true');
  });

  it('selects second tab', () => {
    const wrapper = mount(<App />);

    const tabs = wrapper.find('li[data-test="tab-title"]');
    tabs.at(1).simulate('click');

    const updatedTabs = wrapper.find('li[data-test="tab-title"]');
    expect(updatedTabs.at(0)).toHaveProp('aria-selected', 'false');
    expect(updatedTabs.at(1)).toHaveProp('aria-selected', 'true');
  });

  it('delete first tab', () => {
    const wrapper = mount(<App />);
    const tabRemoveButtons = wrapper.find('[data-test="delete-tab"]');

    expect(wrapper).toContainMatchingElements(2, 'li[data-test="tab-title"]');
    tabRemoveButtons.last().simulate('click');

    expect(wrapper).toContainMatchingElements(1, 'li[data-test="tab-title"]');
  });

  it('add new tab', () => {
    const wrapper = mount(<App />);

    const titleInput = wrapper.find('[data-test="current-tab-title"]');
    titleInput.simulate('change', { target: { value: 'Phones' } });
    const contentInput = wrapper.find('[data-test="current-tab-content"]');
    contentInput.simulate('change', { target: { value: 'Phones content' } });
    const addButton = wrapper.find('[data-test="add-tab"]');
    addButton.simulate('click');

    const tabs = wrapper.find('li[data-test="tab-title"]');
    expect(wrapper).toContainMatchingElements(3, 'li[data-test="tab-title"]');
    expect(tabs.at(2)).toHaveText('Phones');
  });

  it('save selected tab', () => {
    let s = mountApp();
    s.secondTab().simulate('click');

    s = reloadApp();

    expect(s.firstTab()).toHaveProp('aria-selected', 'false');
    expect(s.secondTab()).toHaveProp('aria-selected', 'true');
  });
});
