import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import App from 'app/App';
import HomeView from 'views/HomeView';
import TotalView from 'views/TotalView';
import ScreenWatcher from 'assets/ScreenWatcher';
import DevTools from 'assets/DevTools';
import styled from 'styled';

import { Props } from './Root.typ';

const RootContainer = styled(ScreenWatcher)`
  width: 100%;
  height: 100%;
`;

class Root extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.checkAuth = this.checkAuth.bind(this);
  }

  public checkAuth() {
    const { checkAuth } = this.props;
    checkAuth();
  }

  public render() {
    const { className } = this.props;
    return (
      <RootContainer className={`${className || ''}`}>
        <App>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/total" component={TotalView} />
          </Switch>
        </App>
        {DevTools && <DevTools />}
      </RootContainer>
    );
  }
}

export default Root;
