import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT_CART,
  INCREMENT_CART,
} from "./CartTypes";

export const incrementCart = (product) => {
  return {
    type: INCREMENT_CART,
    payload: product,
  };
};

export const decrementCart = (product) => {
  return {
    type: DECREMENT_CART,
    payload: product,
  };
};

export const addToCart = (products) => {
  return {
    type: ADD_TO_CART,
    payload: products,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
