import React from "react";
import { FaSquareXmark, FaSquareMinus, FaSquarePlus } from "react-icons/fa6";

const CheckoutModal = ({ close, cart }) => {
  return (
    <>
      <div className="checkout-modal">
        <h1>Welcome to Checkout</h1>
        <FaSquareXmark onClick={close} />
        {cart.map((info) => (
          <div key={info.title}>
            <div>
              <img src={info.image} alt={info.title} />
              <p>{info.title}</p>
            </div>

            <p>${info.price}</p>
            <p className="quantity">
              <FaSquareMinus
                onClick={() => decreaseQuantity(info.id)}
                style={{ cursor: "pointer" }}
              />
              {info.quantity}
              <FaSquarePlus
                onClick={() => increaseQuantity(info.id)}
                style={{ cursor: "pointer" }}
              />
            </p>
            <div className="total">
              <p>${info.quantity.toFixed(2) * info.price.toFixed(2)}</p>

              <button
                onClick={() => removeItemFromCart(info)}
                style={{ cursor: "pointer" }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckoutModal;
