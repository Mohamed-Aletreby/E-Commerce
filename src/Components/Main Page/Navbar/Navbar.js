import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const cartClone = cart.filter((cartItem) => {
    return cartItem.quantity > 0;
  });

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <div className="navbar__logo">
            <Link to="/" className="navbar__link">
              Logo
            </Link>
          </div>
          <ul className="navbar__icons-list">
            <li className="navbar__item">
              <Link
                to="/shoppingcart"
                className="navbar__link navbar__link--cart"
                data-cart={cartClone.length}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
