import React, { Component } from 'react';
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import nanoid from 'nanoid';

import './App.css';

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

  deleteTab(index) {
    const { tabs } = this.state;
    this.setState({
      tabs: tabs.filter((_, i) => index !== i),
    });
  }

  addTab() {
    const { tabs, currentTitle, currentValue } = this.state;
    this.setState({
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
              <Tab key={id} data-testid="tab-title">
                {title}
              </Tab>
            ))}
          </TabList>

          {tabs.map(({ id, content }, i) => (
            <TabPanel key={id} data-testid="tab-content">
              <h2>{content}</h2>
              <button type="button" onClick={() => this.deleteTab(i)}>
                X
              </button>
            </TabPanel>
          ))}
        </Tabs>
        <input
          type="text"
          placeholder="Title"
          value={currentTitle}
          onChange={e => this.setState({ currentTitle: e.target.value })}
        />
        <input
          type="text"
          placeholder="Content"
          value={currentValue}
          onChange={e => this.setState({ currentValue: e.target.value })}
        />
        <button type="button" onClick={() => this.addTab()}>
          Add
        </button>
      </>
    );
  }
}

export default App;
