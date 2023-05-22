import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { incrementCart } from "../../../../redux";
import RatingIcons from "../RatingIcons/RatingIcons";

function Product({ product }) {
  const products = useSelector((state) => state.productsReducer.products);

  const dispatch = useDispatch();

  function addToShoppingCart(event) {
    const clickedProduct = products.find((item) => {
      return item.id === +event.target.id;
    });

    dispatch(incrementCart(clickedProduct));
  }

  return (
    <div className="products__card">
      <div className="products__image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="products__content-wrapper">
        <h3 className="products__title">{`${product.title.slice(0, 25)}`}</h3>
        <p className="products__brand">{product.description.slice(0, 25)}</p>
        <div className="products__rating">
          <RatingIcons ratingValue={product.rating.rate} />
        </div>
        <p className="products__category">{product.category}</p>
        <span className="products__price">{product.price} $</span>
        {
          <div className="products__buttons">
            <Link
              to={`product/${product.id}`}
              className="products__view-button"
            >
              Quick View
            </Link>
            <button
              className="products__add-button"
              id={product.id}
              onClick={addToShoppingCart}
            >
              Add to cart
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default Product;
