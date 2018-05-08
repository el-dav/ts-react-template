import { connect } from 'react-redux';

import App from './App.cmp';

import { StateProps, OwnProps } from './App.typ';

const mapStateToProps = (state, ownProps: OwnProps): StateProps => ({
  className: ownProps.className
});

export default connect(mapStateToProps)(App);
