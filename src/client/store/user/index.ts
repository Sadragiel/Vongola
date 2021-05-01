import userActions from './actions';
import userReducers from './reducers';
import userTypes from './types';
import userSelectors from './selectors';

const storeName = 'user';

export const actions = userActions(storeName);
export const types = userTypes(storeName);
export const selectors = userSelectors(storeName);

export default userReducers(storeName);