import types from './types';
import { createAction } from 'redux-actions';

export default storeName => {
    const storeTypes = types(storeName);

    return {
        getUsers: createAction(storeTypes.GET_USERS),
        setUsers: createAction(storeTypes.SET_USERS),
    }
}