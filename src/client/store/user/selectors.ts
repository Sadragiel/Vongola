export default storeName => {
    const getStore = (state) => state[storeName] || {};

    return {
        getUsersList: state => getStore(state).list,
    };
}