import React, { Component } from 'react';
import styled from 'styled-components';
import {
  browserHistory,
  Route,
  Router,
  Redirect,
  IndexRoute
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from 'app/store';
import App from 'app/App/App.cnt';
import HomeView from 'views/HomeView/HomeView.cnt';
import TotalView from 'views/TotalView/TotalView.cnt';
import ScreenWatcher from 'assets/ScreenWatcher/ScreenWatcher.cnt';
import DevTools from 'assets/DevTools/DevTools.cnt';

import { Props } from './Root.typ';

const history = syncHistoryWithStore(browserHistory, store);

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
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={HomeView} onEnter={this.checkAuth} />
            <Route
              path="/total"
              component={TotalView}
              onEnter={this.checkAuth}
            />
            <Redirect from="*" to="/" />
          </Route>
        </Router>
        {DevTools && <DevTools />}
      </RootContainer>
    );
  }
}

export default Root;
