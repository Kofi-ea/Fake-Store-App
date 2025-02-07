import React from "react";
import { useEffect } from "react";
import CartHeader from "../Layout/CartHeader";
import Footer from "../Layout/Footer";

const CartPage = ({ cart, setCart }) => {
  if (!Array.isArray(cart)) {
    return console.log("There was an error loading the cart");
  }

  // if (!cart) {
  //   return <p>Loading cart...</p>;
  // }

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [setCart]);

  const removeItemFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <CartHeader />
      <div className="cart-page">
        <h2>Your Shopping Cart</h2>

        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeItemFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          {/* <p>Total Price: ${totalPrice}</p> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
