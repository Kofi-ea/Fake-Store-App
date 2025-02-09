import React, { useState } from "react";
import { useEffect } from "react";
import CartHeader from "../Layout/CartHeader";
import Footer from "../Layout/Footer";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  // if (!cart) {
  //   return <p>Loading cart...</p>;
  // }

  useEffect(() => {
    // Fetch the cart from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeItemFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((info) => info.id !== itemToRemove.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <CartHeader cart={cart} />
      <div className="cart-page">
        <h2 className="cart-title">
          Your Shopping Cart has {cart.length} items
        </h2>

        <div className="cart-group">
          <div className="cart-item">
            <div className="table-header">
              <p style={{ width: "30%" }}>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>

            {cart.map((info) => (
              <div key={info.title} className="cart-item-info">
                <div className="product">
                  <img src={info.image} alt={info.title} />
                  <p>{info.title}</p>
                </div>

                <p className="price">${info.price}</p>
                <p className="quantity">Quantity</p>
                <div className="total">
                  <button onClick={() => removeItemFromCart(info.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* <p>Total Price: ${totalPrice}</p> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
