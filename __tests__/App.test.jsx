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

const TABS_SELECTOR = 'li[data-test="tab-title"]';

const pageObject = wrapper => ({
  tabs() {
    return wrapper.find(TABS_SELECTOR);
  },
  firstTab() {
    return this.tabs().at(0);
  },
  secondTab() {
    return this.tabs().at(1);
  },
  thirdTab() {
    return this.tabs().at(2);
  },
  addButton() {
    return wrapper.find('[data-test="add-tab"]');
  },
  deleteButton() {
    return wrapper.find('[data-test="delete-tab"]');
  },
  titleInput() {
    return wrapper.find('[data-test="current-tab-title"]');
  },
  contentInput() {
    return wrapper.find('[data-test="current-tab-content"]');
  },
});

const mountApp = () => {
  const wrapper = mount(<App />);
  return [pageObject(wrapper), wrapper];
};

const reloadApp = mountApp;

describe('<App />', () => {
  it('renders app', () => {
    const [s] = mountApp();
    expect(s.firstTab()).toHaveProp('aria-selected', 'true');
  });

  it('selects second tab', () => {
    const [s] = mountApp();

    s.secondTab().simulate('click');

    expect(s.firstTab()).toHaveProp('aria-selected', 'false');
    expect(s.secondTab()).toHaveProp('aria-selected', 'true');
  });

  it('delete first tab', () => {
    const [s, wrapper] = mountApp();

    expect(wrapper).toContainMatchingElements(2, TABS_SELECTOR);
    s.deleteButton().simulate('click');

    expect(wrapper).toContainMatchingElements(1, TABS_SELECTOR);
  });

  it('add new tab', () => {
    const [s, wrapper] = mountApp();

    s.titleInput().simulate('change', { target: { value: 'Phones' } });
    s.contentInput().simulate('change', { target: { value: 'Phones content' } });
    s.addButton().simulate('click');

    expect(wrapper).toContainMatchingElements(3, TABS_SELECTOR);
    expect(s.thirdTab()).toHaveText('Phones');
  });

  it('save selected tab', () => {
    let [s] = mountApp();
    s.secondTab().simulate('click');

    [s] = reloadApp();

    expect(s.firstTab()).toHaveProp('aria-selected', 'false');
    expect(s.secondTab()).toHaveProp('aria-selected', 'true');
  });
});
