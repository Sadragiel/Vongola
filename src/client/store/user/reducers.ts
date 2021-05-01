import types from './types';

const initialState = {
    list: '',
};

export default storeName => (state = initialState, action) => {
    const storeTypes = types(storeName);

    switch(action.type) {
        case storeTypes.SET_USERS: 
            return {
                ...state,
                list: action.payload,
            };
        default: 
            return { ...state };
    }
}