import React from 'react';
import { Provider } from 'react-redux';

import store from '~/app/store';

const Store: React.SFC<{}> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default Store;
