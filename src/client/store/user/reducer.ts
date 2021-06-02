import { types } from './types';
import { UserAction } from './actions';
import { UserDto } from '../../../common/user';

const initialState = {
    list: new Array<UserDto>(),
};

export type UserState = typeof initialState;

export const reducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case types.SET_USERS:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
};
