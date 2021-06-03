import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { UserDto } from '../../../common/user';
import httpClient from '../../utils/httpClient';
import { types, actions, UiAction } from '.';

function* setWindowScroll(action: UiAction) {
    const scrollClass = 'body--no-scroll'
    if(action.type === 'ui.OPEN_DIALOG') {
        document.body.classList.add(scrollClass);
    }
    else {
        document.body.classList.remove(scrollClass);
    }
}

function* wathcGetAll() {
    yield takeEvery([
        types.OPEN_DIALOG,
        types.CLOSE_DIALOG,
    ], setWindowScroll);
}

export default [wathcGetAll()];
