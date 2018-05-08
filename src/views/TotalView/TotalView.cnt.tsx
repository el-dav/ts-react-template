import { connect } from 'react-redux';

import { selectTotal } from 'ducks/count/selectors';
import { increase, decrease, increaseAsync } from 'ducks/count/actions';

import TotalView from './TotalView.cmp';

import { StateProps, DispatchProps, OwnProps } from './TotalView.typ';

const mapStateToProps = (state, ownProps: OwnProps): StateProps => ({
  className: ownProps.className,
  total: selectTotal(state)
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
  increaseAsync: () => {
    dispatch(increaseAsync());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TotalView);
