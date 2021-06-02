import { State } from '../state.type';
import { storeName } from './types';

const getStore = (state: State) => state[storeName];

export const selectors = {
    getUsersList: (state: State) => getStore(state).list,
};
