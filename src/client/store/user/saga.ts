import { put, call, takeLatest, takeEvery} from 'redux-saga/effects';
import { UserDto } from '../../../common/user';
import httpClient from '../../utils/httpClient';
import { types, actions } from '.';

function* getAllUsers() {
    const url = new URL('/api/v1/user', window.location.origin);
    // unsafe 'response: User []' c==8
    const response: UserDto [] = yield call(httpClient.get, url);
    yield put(actions.setUsers(response));
}

function* wathcGetAll() {
    yield takeEvery(types.GET_USERS, getAllUsers);
}

export default [
    wathcGetAll(),
];