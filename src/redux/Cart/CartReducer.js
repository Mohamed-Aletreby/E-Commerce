import {
  DECREMENT_CART,
  INCREMENT_CART,
  CLEAR_CART,
  ADD_TO_CART,
} from "./CartTypes";

const cartState = {
  cart: [],
};

const cartReducer = (state = cartState, action) => {
  let cartClone = [...state.cart];
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: action.payload,
      };
    case INCREMENT_CART:
      let isProductExist = false;
      cartClone.forEach((product) => {
        if (product.id === action.payload.id) {
          product.quantity++;
          isProductExist = true;
        }
      });
      if (!isProductExist) {
        cartClone.push({ ...action.payload, quantity: 1 });
      }

      return {
        cart: cartClone,
      };
    case DECREMENT_CART:
      cartClone.forEach((product) => {
        if (product.id === action.payload.id) {
          if (product.quantity > 1) {
            product.quantity--;
          } else {
            product.quantity = 0;
          }
        }
      });

      return {
        cart: cartClone,
      };
    case CLEAR_CART:
      console.warn("from clear cart ======");
      return {
        cart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
