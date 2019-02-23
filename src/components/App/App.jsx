import React, { Component } from 'react';
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './App.css';

class App extends Component {
  render() {
    return (
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
      </Tabs>
    );
  }
}

export default App;
