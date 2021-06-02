import { UserDto } from '../../../common/user';
import { createActionCreator, Action } from '../../utils/actionCreator';
import { types } from './types';

const getUsers = createActionCreator(types.GET_USERS)();
const setUsers = createActionCreator(types.SET_USERS)<UserDto[]>();

export const actions = {
    getUsers,
    setUsers,
};
export type UserAction = Action<typeof actions>;
