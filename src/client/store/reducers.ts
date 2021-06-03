import { combineReducers } from 'redux';
import { reducer as userReducer, storeName as userStoreName } from './user';
import { reducer as uiReducer, storeName as uiStoreName } from './ui';

export default combineReducers({
    [userStoreName]: userReducer,
    [uiStoreName]: uiReducer,
});
