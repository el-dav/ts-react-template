import React from 'react';
import { storiesOf } from '@storybook/react';

import Story from 'assets/Story';

import TotalView from './TotalView.cmp';
import ConnectedTotalView from './TotalView.cnt';

const stories = storiesOf('TotalView', module);

const increase = () => undefined;
const increaseAsync = () => undefined;
const decrease = () => undefined;

stories.add('Default', () => (
  <Story>
    <TotalView
      total={0}
      increase={increase}
      decrease={decrease}
      increaseAsync={increaseAsync}
    />
  </Story>
));

stories.add('Connected', () => (
  <Story isConnected>
    <ConnectedTotalView />
  </Story>
));

export default stories;
