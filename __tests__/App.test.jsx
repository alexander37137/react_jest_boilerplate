import React from 'react';
import { render } from 'enzyme';

import App from '../src/components/App';

describe('<App />', () => {
  it('renders app', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('selects second tab', () => {
    const wrapper = render(<App />);
    wrapper.find('button').simulate('click');
  });
});
