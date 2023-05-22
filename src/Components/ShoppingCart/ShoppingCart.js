import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, decrementCart, incrementCart } from "../../redux";

import Navbar from "../Main Page/Navbar/Navbar";

import "./ShoppingCart.css";

function Cart() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const filteredCart = cart.filter((cartItem) => {
    return cartItem.quantity > 0;
  });

  const cartSubTotal = +cart
    .map((cartItem) => {
      return +cartItem.price * +cartItem.quantity;
    })
    .reduce((prevValue, currentValue) => {
      return prevValue + currentValue;
    }, 0)
    .toFixed(2);

  const discount = +((cartSubTotal * 15) / 100).toFixed(2);
  const tax = +((cartSubTotal * 14) / 100).toFixed(2);
  const delivery = cartSubTotal && 100;

  const cartTotal = +(cartSubTotal + tax + delivery - discount).toFixed(2);

  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="container">
          <div className="cart__title">
            <h2>shopping cart</h2>
          </div>
          <div className="cart__wrapper">
            <table className="cart__table">
              <thead className="cart__table-heading">
                <tr>
                  <th>title</th>

                  <th>brand</th>
                  <th>price</th>
                  <th>total</th>
                  <th>quantity</th>
                  <th>image</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody className="cart__table-body">
                {filteredCart.map((cartItem) => {
                  return (
                    <tr key={cartItem.id}>
                      <td>{cartItem.title}</td>
                      <td>{cartItem.brand}</td>
                      <td>{cartItem.price} $</td>
                      <td>{+cartItem.price * +cartItem.quantity} $</td>
                      <td>{cartItem.quantity}</td>
                      <td>
                        <img
                          className="cart__table-image"
                          src={cartItem.image}
                          alt={cartItem.title}
                        />
                      </td>
                      <td>
                        <div className="table__add-group-buttons">
                          <button
                            className="table__minus-button"
                            onClick={() => dispatch(decrementCart(cartItem))}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <button
                            className="table__plus-button"
                            onClick={() => dispatch(incrementCart(cartItem))}
                          >
                            <i className="fa-solid fa-plus fa-1x"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="cart__table-foot">
                {filteredCart.length > 0 ? (
                  <tr>
                    <td>
                      <button
                        className="cart__table-clear"
                        onClick={() => dispatch(clearCart())}
                      >
                        Clear All Cart
                      </button>
                    </td>
                  </tr>
                ) : null}
              </tfoot>
            </table>
            <div className="cart__process">
              <ul className="cart__process-list">
                <li className="cart__process-item cart__process--subtotal">
                  <span className="cart__process-text">subtotal</span>
                  <span className="cart__process-number">{cartSubTotal}$</span>
                </li>
                <li className="cart__process-item">
                  <span className="cart__process-text">Delivery</span>
                  <span className="cart__process-number">{delivery} $</span>
                </li>
                <li className="cart__process-item">
                  <span className="cart__process-text">Tax</span>
                  <span className="cart__process-number">
                    + (14%) - {tax} $
                  </span>
                </li>
                <li className="cart__process-item">
                  <span className="cart__process-text">Discount</span>
                  <span className="cart__process-number">
                    (15%) - {discount} $
                  </span>
                </li>
                <li className="cart__process-item cart__process--total">
                  <span className="cart__process-text ">total</span>
                  <span className="cart__process-number ">
                    {cartSubTotal && cartTotal}
                  </span>
                </li>
              </ul>
              <div className="cart__process-buttons">
                <Link
                  to="/checkout"
                  className=" cart__process-button cart__process-button--checkout"
                >
                  process to checkout
                </Link>
                <Link
                  to="/"
                  className=" cart__process-button cart__process-button--continue"
                >
                  continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
