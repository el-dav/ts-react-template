import React from 'react';
import renderer from 'react-test-renderer';

import Story from 'assets/Story';

import HomeViewCmp from './HomeView.cmp';
import HomeViewCnt from './HomeView.cnt';

describe('HomeView', () => {
  it('renders the Component correctly', () => {
    const tree = renderer
      .create(
        <Story isConnected>
          <HomeViewCmp />
        </Story>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Container correctly', () => {
    const tree = renderer
      .create(
        <Story isConnected>
          <HomeViewCnt />
        </Story>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
