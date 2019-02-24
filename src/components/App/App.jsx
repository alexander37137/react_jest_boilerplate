import React, { Component } from 'react';
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import Cookie from 'js-cookie';
import nanoid from 'nanoid';

import './App.css';

import { RssService } from '../../services/RssService';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: Number(Cookie.get('tabIndex')) || 0,
      currentTitle: 'Dtf',
      currentValue: 'https://cors.io/?https://dtf.ru/rss/all',
      tabs: [
        {
          id: nanoid(),
          title: 'Artists',
          content: ['Artists content'],
        },
        {
          id: nanoid(),
          title: 'Books',
          content: ['Books content'],
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

  async addTab() {
    const { tabs, currentTitle, currentValue } = this.state;
    const rss = await axios.get(currentValue);
    const content = await RssService.titles(rss.data);
    this.setState({
      currentTitle: '',
      currentValue: '',
      tabIndex: tabs.length,
      tabs: [
        ...tabs,
        {
          content,
          id: nanoid(),
          title: currentTitle,
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
              <div data-test="tab-content">
                {content.map(line => (
                  <p key={line}>{line}</p>
                ))}
              </div>
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
          placeholder="Rss link"
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
