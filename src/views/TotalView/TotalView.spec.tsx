import React from 'react';
import renderer from 'react-test-renderer';

import Story from 'assets/Story';

import TotalViewCmp from './TotalView.cmp';
import TotalViewCnt from './TotalView.cnt';

const increase = () => undefined;
const decrease = () => undefined;
const increaseAsync = () => undefined;

describe('TotalView', () => {
  it('renders the Component correctly', () => {
    const tree = renderer
      .create(
        <Story isConnected>
          <TotalViewCmp
            total={5}
            increase={increase}
            decrease={decrease}
            increaseAsync={increaseAsync}
          />
        </Story>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Component correctly with different counts', () => {
    const tree = renderer
      .create(
        <Story isConnected>
          <TotalViewCmp
            total={2}
            increase={increase}
            decrease={decrease}
            increaseAsync={increaseAsync}
          />
        </Story>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Container correctly', () => {
    const tree = renderer
      .create(
        <Story isConnected>
          <TotalViewCnt />
        </Story>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
