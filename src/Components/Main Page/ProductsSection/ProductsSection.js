import { useState, useEffect } from "react";

import Product from "../ProductsSection/ProductItem/Product";
import "./products.css";
import { useSelector } from "react-redux";

function ProductsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [productsInfo, setProductsInfo] = useState([]);
  const [categories, setCategories] = useState([]);
  const products = useSelector((state) => state.productsReducer.products);

  function activeTabHandler(event) {
    setActiveTab(event.target.dataset.type);
    setSelectedCategory(event.target.dataset.type);
  }

  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      });
  };

  const getSpecificCategories = () => {
    if (selectedCategory === "all") {
      setProductsInfo([...products]);
    } else {
      setProductsInfo(
        products.filter((product) => {
          return product.category === selectedCategory;
        })
      );
    }
  };

  useEffect(() => {
    setProductsInfo([...products]);
    getCategories();
    getSpecificCategories();
  }, [selectedCategory, products]);

  return (
    <div className="products-section">
      <div className="container">
        <div className="product-header">
          <div className="product-header__title">
            <h2>our products</h2>
          </div>
          <div className="product-header__nav">
            <button
              className={`product-header__item  ${
                activeTab === "all" ? " product-header__item--active" : ""
              }`}
              data-type="all"
              onClick={activeTabHandler}
            >
              all
            </button>
            {categories.map((category, index) => {
              return (
                <button
                  key={index}
                  className={`product-header__item ${
                    activeTab === category
                      ? " product-header__item--active"
                      : ""
                  }`}
                  data-type={category}
                  onClick={activeTabHandler}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="products__wrapper">
          <div className="products__cards">
            {productsInfo.map((product) => {
              return (
                <Product product={product} showBtn={true} key={product.id} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
