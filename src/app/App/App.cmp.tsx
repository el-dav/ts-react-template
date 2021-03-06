import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import styled from '~/utils/styled';

import { Props } from './App.typ';

const AppContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Body = styled('div')`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Content = styled('div')`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

const AppDrawer = styled(Drawer)`
  position: relative;
  > div {
    width: 200px;
    position: relative;
    max-height: 100%;
  }
`;

class App extends Component<Props> {
  public render() {
    const { className, children } = this.props;
    return (
      <AppContainer className={className || ''}>
        <AppBar position="static">
          <Toolbar>My App</Toolbar>
        </AppBar>
        <Body>
          <AppDrawer variant="permanent">
            <List>
              <Link to="/">
                <ListItem button>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/total">
                <ListItem button>
                  <ListItemText primary="Total" />
                </ListItem>
              </Link>
            </List>
          </AppDrawer>
          <Content>{children}</Content>
        </Body>
      </AppContainer>
    );
  }
}

export default App;
