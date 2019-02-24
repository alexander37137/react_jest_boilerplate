import React, { Component } from 'react';
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cookie from 'js-cookie';
import nanoid from 'nanoid';

import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: Number(Cookie.get('tabIndex')) || 0,
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

  selectTab(tabIndex) {
    Cookie.set('tabIndex', tabIndex);
    this.setState({ tabIndex });
  }

  render() {
    const {
      tabs, currentTitle, currentValue, tabIndex,
    } = this.state;
    return (
      <>
        <Tabs selectedIndex={tabIndex} onSelect={index => this.selectTab(index)}>
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
          onChange={e => this.setState({ currentTitle: e.target.value })}
        />
        <input
          data-test="current-tab-content"
          type="text"
          placeholder="Content"
          value={currentValue}
          onChange={e => this.setState({ currentValue: e.target.value })}
        />
        <button data-test="add-tab" type="button" onClick={() => this.addTab()}>
          Add
        </button>
      </>
    );
  }
}

export default App;
