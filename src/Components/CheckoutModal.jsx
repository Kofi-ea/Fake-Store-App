import React from "react";
import { FaSquareXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CheckoutModal = ({ close, cart, setCart, subtotal, tax, orderTotal }) => {
  const removeItemFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((info) => info.id !== itemToRemove.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <>
      <div className="checkout-modal">
        <p className="checkout-title">Welcome to Checkout</p>
        <FaSquareXmark
          onClick={close}
          style={{
            position: "absolute",
            right: "20",
            top: "5",
            fontSize: "1.5rem",
            color: "red",
          }}
        />

        <div className="checkout-summary">
          <div className="review-order">
            {cart.map((info) => (
              <div key={info.title} className="review-order-div">
                <div className="review-product">
                  <img src={info.image} alt={info.title} />
                  <p>{info.title}</p>
                </div>

                <div className="review-product-aside">
                  <p>Price: ${info.price}</p>
                  <p>Quantity: {info.quantity}</p>
                  <div>
                    <p>
                      Total: ${info.quantity.toFixed(2) * info.price.toFixed(2)}
                    </p>
                    <div className="edit-btns">
                      <button onClick={close}>Update</button>

                      <button onClick={() => removeItemFromCart(info)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <h1>Order Summary</h1>

            <div className="order-info">
              <div className="items">
                <p>Items ({cart.length}) :</p>
                <p>${subtotal}</p>
              </div>

              <div className="before-tax">
                <p>Total before Tax: </p>
                <p>${subtotal}</p>
              </div>

              <div className="estimated-tax">
                <p>Estimated Tax: </p>
                <p>${tax}</p>
              </div>
            </div>

            <div className="order-total">
              <p>Order Total : </p>
              <p>${orderTotal}</p>
            </div>
            <Link to={"/order"}>
              <button className="order-btn">Place your order</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
