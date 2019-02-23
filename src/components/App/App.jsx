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
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>
            <span data-artists-tab>Artists</span>
          </Tab>
          <Tab>
            <span data-books-tab>Books</span>
          </Tab>
        </TabList>

        <TabPanel>
          <h2 data-tab-content>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2 data-tab-content>Any content 2</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default App;
