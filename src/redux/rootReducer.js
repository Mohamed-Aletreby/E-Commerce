import { combineReducers } from "redux";
import cartReducer from "./Cart/CartReducer";
import productsReducer from "./Products/productsReducer";

const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
});

export default rootReducer;
