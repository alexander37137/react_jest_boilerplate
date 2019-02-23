import React from 'react';
import { render } from 'enzyme';

import App from '../src/components/App';

describe('<App />', () => {
  it('renders app', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('selects second tab', () => {
  //   const wrapper = render(
  //     <Tabs>
  //       <TabList>
  //         <Tab>Title 1</Tab>
  //         <Tab>Title 2</Tab>
  //       </TabList>

  //       <TabPanel>
  //         <h2>Any content 1</h2>
  //       </TabPanel>
  //       <TabPanel>
  //         <h2>Any content 2</h2>
  //       </TabPanel>
  //     </Tabs>,
  //   );
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});
