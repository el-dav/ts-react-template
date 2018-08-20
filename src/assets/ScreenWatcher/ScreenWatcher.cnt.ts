import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from 'ducks/ducks';
import { selectScreenData } from 'ducks/screen/selectors';
import { screenResize } from 'ducks/screen/actions';

import ScreenWatcher from './ScreenWatcher.cmp';

import { StateProps, DispatchProps, OwnProps } from './ScreenWatcher.typ';

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => ({
  className: ownProps.className,
  screenData: selectScreenData(state)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  screenResize: (width: number, height: number) => {
    dispatch(screenResize(width, height));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenWatcher);
