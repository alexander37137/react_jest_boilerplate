import React, { Component } from 'react';
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: [
        {
          title: 'Artists',
          content: 'Artists content',
        },
        {
          title: 'Books',
          content: 'Books content',
        },
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <Tabs>
        <TabList>
          {tabs.map(({ title }) => (
            <Tab key={title}>
              <span data-testid="tab-title">{title}</span>
            </Tab>
          ))}
        </TabList>

        {tabs.map(({ content }) => (
          <TabPanel key={content}>
            <h2 data-testid="tab-content">{content}</h2>
          </TabPanel>
        ))}
      </Tabs>
    );
  }
}

export default App;
