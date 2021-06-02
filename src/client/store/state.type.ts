import { UserAction, UserState, storeName as userStoreName } from './user';

export type State = {
    [userStoreName]: UserState;
};

export type StateAction = UserAction;
