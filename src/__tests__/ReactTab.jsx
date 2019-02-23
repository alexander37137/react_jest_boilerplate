import React from 'react';
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from 'react-tabs';
import { render } from 'enzyme';

describe('<ReactTab />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = render(
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
