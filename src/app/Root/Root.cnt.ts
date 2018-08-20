import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { AppState, AppDispatch } from 'ducks';

import Root from './Root.cmp';
import { StateProps, DispatchProps, OwnProps } from './Root.typ';

const mapStateToProps = (
  state: AppState,
  ownProps: RouteComponentProps<{}> & OwnProps
): StateProps => ({
  className: ownProps.className
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
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
