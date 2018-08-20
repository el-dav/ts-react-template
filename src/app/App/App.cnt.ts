import { connect } from 'react-redux';

import { AppState } from 'ducks';

import App from './App.cmp';
import { StateProps, OwnProps } from './App.typ';

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => ({
  className: ownProps.className
});

export default connect(mapStateToProps)(App);
