import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { AppState } from 'ducks';

import Root from './Root.cmp';
import { StateProps, DispatchProps } from './Root.typ';
import { OwnProps } from '../App/App.typ';

const mapStateToProps = (
  state: AppState,
  ownProps: RouteComponentProps<{}> & OwnProps
): StateProps => ({
  className: ownProps.className
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  checkAuth: () => {
    global.console.log('checking auth');
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Root)
);
