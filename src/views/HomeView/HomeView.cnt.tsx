import { connect } from 'react-redux';

import { AppState } from 'ducks';

import HomeView from './HomeView.cmp';
import { StateProps, OwnProps } from './HomeView.typ';

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => ({
  className: ownProps.className
});

export default connect(mapStateToProps)(HomeView);
