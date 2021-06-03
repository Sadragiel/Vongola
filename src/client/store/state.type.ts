import { UserAction, UserState, storeName as userStoreName } from './user';
import { UiAction, UiState, storeName as uiStoreName } from './ui';

export type State = {
    [userStoreName]: UserState,
    [uiStoreName]: UiState,
};
