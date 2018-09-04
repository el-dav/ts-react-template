import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Story from '~/assets/Story';

import TotalView from './TotalView.cmp';
import ConnectedTotalView from './TotalView.cnt';

const stories = storiesOf('TotalView', module);

const increase = action('increase');
const increaseAsync = action('increaseAsync');
const decrease = action('decrease');

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
