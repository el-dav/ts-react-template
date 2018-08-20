import { combineEpics } from 'redux-observable';

import count from './count/epics';

export default combineEpics(count);
