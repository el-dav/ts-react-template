import React from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';

import { Props } from './TotalView.typ';

const Page = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const TotalView = ({
  className,
  total,
  increase,
  decrease,
  increaseAsync
}: Props) => (
  <Page className={className || ''}>
    {`Total: ${total}`}
    <ButtonContainer>
      <Button variant="raised" color="primary" onClick={increase}>
        Increase
      </Button>
      <Button variant="raised" color="secondary" onClick={decrease}>
        Decrease
      </Button>
    </ButtonContainer>
    <Button variant="raised" onClick={increaseAsync}>
      Increase Async
    </Button>
  </Page>
);

export default TotalView;
