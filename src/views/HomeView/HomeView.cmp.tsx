import React from 'react';

import { Props } from './HomeView.typ';

const HomeView: React.SFC<Props> = ({ className }) => (
  <div className={className || ''}>Home</div>
);

export default HomeView;
