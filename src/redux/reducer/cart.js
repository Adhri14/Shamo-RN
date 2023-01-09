const initCart = {
    cart: [],
};

export const cartReducer = (state = initCart, action) => {
    if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            cart: action.value,
        };
    }
    if (action.type === 'CLEAR_CART') {
        return initCart;
    }
    return state;
};
