import "./global.css";

import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux";

import LoadingSpinner from "./Components/Loading Spinner/LoadingSpinner";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import MainPage from "./Components/Main Page/MainPage";
import QuickView from "./Components/Main Page/QuickView/QuickView";

import NotFoundPage from "./Components/Not Found Page/NotFoundPage";

function App() {
  const loading = useSelector((state) => state.productsReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return loading === false ? (
    <Routes>
      <Route path="/shoppingcart" element={<ShoppingCart />} />
      <Route path="/" element={<MainPage />} exact />
      <Route path="/product/:productId" element={<QuickView />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  ) : (
    <LoadingSpinner />
  );
}

export default App;
