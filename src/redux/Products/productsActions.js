import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./productsTypes";

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  console.log("error", error);
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProducts = () => {
  return function (dispatch) {
    dispatch(fetchProductsRequest());

    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((productsList) => {
        dispatch(fetchProductsSuccess(productsList));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};
