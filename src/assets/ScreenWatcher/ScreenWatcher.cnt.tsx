import { connect } from 'react-redux';

import { State } from 'ducks/ducks';
import { selectScreenData } from 'ducks/screen/selectors';
import { screenResize } from 'ducks/screen/actions';

import ScreenWatcher from './ScreenWatcher.cmp';

import { StateProps, DispatchProps, OwnProps } from './ScreenWatcher.typ';

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => ({
  className: ownProps.className,
  screenData: selectScreenData(state)
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
  screenResize: (width, height) => {
    dispatch(screenResize(width, height));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenWatcher);
