import { put, takeLatest} from 'redux-saga/effects';

import httpClient from '../../utils/httpClient';
import { types, actions } from '.';

function* getAllUsers() {
    const url = new URL('/api/v1/user', window.location.origin);
    const response = yield httpClient.get(url);
    yield put(actions.setUsers(response));
}

function* wathcGetAll() {
    yield takeLatest(types.GET_USERS, getAllUsers);
}

export default [
    wathcGetAll(),
];