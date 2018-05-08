import { connect } from 'react-redux';

import HomeView from './HomeView.cmp';

import { StateProps, OwnProps } from './HomeView.typ';

const mapStateToProps = (state, ownProps: OwnProps): StateProps => ({
  className: ownProps.className
});

export default connect(mapStateToProps)(HomeView);
