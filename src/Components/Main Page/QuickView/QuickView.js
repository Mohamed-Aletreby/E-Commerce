import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { incrementCart } from "../../../redux";

import "./QuickView.css";
import "../ProductsSection/products.css";
import Navbar from "../Navbar/Navbar";
import RatingIcons from "../ProductsSection/RatingIcons/RatingIcons";

function QuickView() {
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const specificItem =
    products.find((product) => {
      return product.id === +params.productId;
    }) || JSON.parse(localStorage.getItem("specificItem"));

  localStorage.setItem("specificItem", JSON.stringify(specificItem));

  function addToShoppingCart() {
    dispatch(incrementCart(specificItem));
  }

  return (
    <>
      <Navbar />
      <section className="quick-view">
        <div className="container">
          <div className="quick-view__content">
            <div className="quick-view__items">
              <div className="quick-view__images">
                <div className="quick-view__img-top">
                  <img
                    src={specificItem.image}
                    alt=""
                    className="img-active"
                    title={specificItem.title}
                  />
                </div>
              </div>
              <div className="quick-view__description">
                <div className="quick-view__body">
                  <span className="quick-view__category">
                    {specificItem.category}
                  </span>
                  <h3 className="quick-view__title">{specificItem.title}</h3>
                  <p className="quick-view__description">
                    {specificItem.description}
                  </p>
                  <div className="quick-view__rate">
                    <div className="quick-view__icons">
                      <RatingIcons ratingValue={specificItem.rating.rate} />
                    </div>
                  </div>
                  <div className="quick-view__brand">
                    <span>{specificItem.brand}</span>
                  </div>
                  <div className="quick-view__price">
                    <span>{specificItem.price} $</span>
                  </div>

                  <div className="products__buttons">
                    <button
                      className="products__add-button"
                      onClick={addToShoppingCart}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuickView;
