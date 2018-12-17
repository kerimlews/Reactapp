import { combineReducers } from 'redux';

import appReducer from './containers/App/reducer';
import detailReducer from './containers/Details/reducer';
import contentReducer from './containers/Content/reducer';

export default combineReducers({
    appReducer,
    detailReducer,
    contentReducer
});

