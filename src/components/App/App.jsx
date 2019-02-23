import React, { Component } from 'react';
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import createDebug from 'debug';
import nanoid from 'nanoid';

import './App.css';

const log = createDebug('my-app');

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTitle: '',
      currentValue: '',
      tabs: [
        {
          id: nanoid(),
          title: 'Artists',
          content: 'Artists content',
        },
        {
          id: nanoid(),
          title: 'Books',
          content: 'Books content',
        },
      ],
    };
  }

  setStateWithLog(nextState) {
    log('state', this.state);
    log('nextState', nextState);
    return this.setState(nextState);
  }

  deleteTab(index) {
    const { tabs } = this.state;
    this.setStateWithLog({
      tabs: tabs.filter((_, i) => index !== i),
    });
  }

  addTab() {
    const { tabs, currentTitle, currentValue } = this.state;
    this.setStateWithLog({
      tabs: [
        ...tabs,
        {
          id: nanoid(),
          title: currentTitle,
          content: currentValue,
        },
      ],
    });
  }

  render() {
    const { tabs, currentTitle, currentValue } = this.state;
    return (
      <>
        <Tabs>
          <TabList>
            {tabs.map(({ id, title }) => (
              <Tab key={id} data-test="tab-title">
                <span>{title}</span>
              </Tab>
            ))}
          </TabList>

          {tabs.map(({ id, content }, i) => (
            <TabPanel key={id}>
              <h2 data-test="tab-content">{content}</h2>
              <button data-test="delete-tab" type="button" onClick={() => this.deleteTab(i)}>
                X
              </button>
            </TabPanel>
          ))}
        </Tabs>
        <input
          data-test="current-tab-title"
          type="text"
          placeholder="Title"
          value={currentTitle}
          onChange={e => this.setStateWithLog({ currentTitle: e.target.value })}
        />
        <input
          data-test="current-tab-content"
          type="text"
          placeholder="Content"
          value={currentValue}
          onChange={e => this.setStateWithLog({ currentValue: e.target.value })}
        />
        <button data-test="add-tab" type="button" onClick={() => this.addTab()}>
          Add
        </button>
      </>
    );
  }
}

export default App;
