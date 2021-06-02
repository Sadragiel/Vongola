import { combineReducers } from 'redux';
import { reducer as userReducer, storeName as userStoreName } from './user';

export default combineReducers({
    [userStoreName]: userReducer,
});
