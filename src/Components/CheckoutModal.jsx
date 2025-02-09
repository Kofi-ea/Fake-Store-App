import React from "react";
import { FaSquareXmark } from "react-icons/fa6";

const CheckoutModal = ({ close, cart }) => {
  return (
    <>
      <div className="checkout-modal">
        <p className="checkout-title">Welcome to Checkout</p>
        <FaSquareXmark onClick={close} />

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
                      <button>Update</button>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
