import { connect } from 'react-redux';

import Root from './Root.cmp';

import { StateProps, DispatchProps, OwnProps } from './Root.typ';

const mapStateToProps = (state, ownProps: OwnProps): StateProps => ({
  className: ownProps.className
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
  checkAuth: () => {
    global.console.log('checking auth');
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
