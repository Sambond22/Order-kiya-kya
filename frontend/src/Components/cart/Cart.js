import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  updateCartQuantity,
} from "../../Actions/cartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  // function to remove item from the cart

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };
  // function to increase the quantity of an item
  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (newQty > stock) return;
    dispatch(addItemToCart(id, newQty));
  };
  // function for decreasing the quantity of an item
  const decreaseQty = (id, quantity) => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      dispatch(updateCartQuantity(id, newQty));
    }
  };

  // function to navigate to the delivery page
  const checkoutHandler = () => {
    navigate("/delivery");
  };
  return (
    <div>
      {/* conditional rendering based on cartItems */}
      {cartItems.length === 0 ? (
        <h2 className="mt-5">Your Cart is empty</h2>
      ) : (
        <div>
          {/* Display the number of Itmes in the cart */}
          <h2 className="mt-5">
            Your Cart: <b>{cartItems.length} itmes</b>
          </h2>

          {/* cart item */}
          <div className="row d-flex justify-content-between cartt">
            <div className="col-12 col-lg-8">
              {cartItems.map((item) => (
                <div>
                  <hr></hr>
                  {/* cart item */}
                  <div className="cart-item" key={item.fooditem}>
                    <div className="row">
                      {/* display item image */}
                      <div className="col-4 col-lg-3">
                        <img
                          src={item.image}
                          alt="Items"
                          height="90"
                          width="115"
                        ></img>
                      </div>
                      {/* display item price */}
                      <div className="col-5 col-lg-3">{item.name}</div>
                      {/* itme price */}
                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p id="card_item_price">
                          <FontAwesomeIcon
                            icon={faIndianRupee}
                            size="xs"
                          ></FontAwesomeIcon>
                          {item.price}
                        </p>
                      </div>

                      {/* Quantity control */}
                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <div className="stockCounter d-inline">
                          {/* decrease qty button */}
                          <span
                            className="btn btn-danger minus"
                            onClick={() => {
                              decreaseQty(item.fooditem, item.quantity);
                            }}
                          >
                            -
                          </span>
                          {/* display current quantity */}
                          <input
                            type="number"
                            className="form-control count d-inline"
                            value={item.quantity}
                            readOnly
                          ></input>

                          {/* Increase quantity btn*/}
                          <span
                            className="btn btn-primary plus"
                            onClick={() =>
                              increaseQty(
                                item.fooditem,
                                item.quantity,
                                item.stock
                              )
                            }
                          >
                            +
                          </span>
                        </div>
                      </div>

                      
                      {/* remve item button */}

                      <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <i
                          id="delete_cart_item"
                          className="fa fa-trash btn btn-danger"
                          onClick={() => removeCartItemHandler(item.fooditem)}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                              <h4>Order Summary</h4>
                              <hr></hr>
                              {/* display subtotal */}
                              <p>
                                Subtotal:
                                <span className="order-summary-values">
                                  {cartItems.reduce(
                                    (acc,item)=>acc+Number(item.quantity),
                                      0
                                    )}
                                    (Units)
                                </span>
                              </p>
                              {/* display total */}
                              <p>
                              Total:
                              <span className="order-summary-values">
                                <FontAwesomeIcon icon={faIndianRupee} size="xs"></FontAwesomeIcon>
                                {cartItems.reduce(
                                  (acc,item)=>acc+item.quantity*item.price,0)
                                  .toFixed(2)
                                  };
                              </span>
                              </p>
                              <hr></hr>
                              {/* checkout button */}
                              <button id="checkout_btn" className="btn btn-primary btn-block"
                                onClick={checkoutHandler}>
                                Check Out
                              </button>
                            </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


