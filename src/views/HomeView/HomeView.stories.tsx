import React from 'react';
import { storiesOf } from '@storybook/react';

import Story from 'assets/Story';

import HomeView from './HomeView.cmp';
import ConnectedHomeView from './HomeView.cnt';

const stories = storiesOf('HomeView', module);

stories.add('Default', () => (
  <Story>
    <HomeView />
  </Story>
));

stories.add('Connected', () => (
  <Story isConnected>
    <ConnectedHomeView />
  </Story>
));

export default stories;
