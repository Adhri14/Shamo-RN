const initState = {
    whislist: [],
};

export const reducerWhislist = (state = initState, action) => {
    if (action.type === 'ADD_WHISLIST') {
        return {
            whislist: action.value,
        };
    }
    return state;
};
