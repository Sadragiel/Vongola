import { types } from './types';
import { UiAction } from './actions';

const initialState = {
    activeDialog: '',
};

export type UiState = typeof initialState;

export const reducer = (state = initialState, action: UiAction) => {
    switch (action.type) {
        case types.OPEN_DIALOG:
            return {
                ...state,
                activeDialog: action.payload,
            };
        case types.CLOSE_DIALOG:
            return {
                ...state,
                activeDialog: '',
            };
        default:
            return state;
    }
};
