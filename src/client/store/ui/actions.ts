import { createActionCreator, Action } from '../../utils/actionCreator';
import { types } from './types';

const openDialog = createActionCreator(types.OPEN_DIALOG)<string>();
const closeDialog = createActionCreator(types.CLOSE_DIALOG)();

export const actions = {
    openDialog,
    closeDialog,
};
export type UiAction = Action<typeof actions>;
