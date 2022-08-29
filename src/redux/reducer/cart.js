const initCart = {
  cart: [],
};

export const cartReducer = (state = initCart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.value],
      };
    // case 'UPDATE_QTY':
    //   const findId = state.cart.find(item => item.id === action.payload?.id);
    //   if (findId) {

    //   }

    default:
      return state;
  }
};
