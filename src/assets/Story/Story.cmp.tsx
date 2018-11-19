import React from 'react';

import Theme from '~/assets/Theme';
import Store from '~/assets/Store';

interface Props {
  isConnected?: boolean;
}

const Story: React.SFC<Props> = ({ children, isConnected }) =>
  isConnected ? (
    <Store>
      <Theme>{children}</Theme>
    </Store>
  ) : (
    <Theme>{children}</Theme>
  );

export default Story;
