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
      currentTitle: '',
      currentValue: '',
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
            {tabs.map(({ title }) => (
              <Tab key={title} data-testid="tab-title">
                {title}
              </Tab>
            ))}
          </TabList>

          {tabs.map(({ content }, i) => (
            <TabPanel key={content} data-testid="tab-content">
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
