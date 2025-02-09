import React, { useState } from "react";
import { useEffect } from "react";
import CartHeader from "../Layout/CartHeader";
import Footer from "../Layout/Footer";
import { FaCircleXmark, FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // if (!cart) {
  //   return <p>Loading cart...</p>;
  // }

  useEffect(() => {
    // Fetch the cart from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItemFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((info) => info.id !== itemToRemove.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

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
              <p style={{ width: "5%", backgroundColor: "blue" }}>Price</p>
              <p
                style={{
                  width: "10%",
                  backgroundColor: "yellow",
                  textAlign: "center",
                }}
              >
                Quantity
              </p>
              <p style={{ width: "14%", backgroundColor: "aqua" }}>Total</p>
            </div>

            {cart.map((info) => (
              <div key={info.title} className="cart-item-info">
                <div className="product">
                  <img src={info.image} alt={info.title} />
                  <p>{info.title}</p>
                </div>

                <p className="price">${info.price}</p>
                <p className="quantity">
                  <FaSquareMinus onClick={() => decreaseQuantity(info.id)} />
                  {info.quantity}
                  <FaSquarePlus onClick={() => increaseQuantity(info.id)} />
                </p>
                <div className="total">
                  <p>{info.quantity * info.price}</p>
                  <FaCircleXmark onClick={() => removeItemFromCart(info.id)} />
                </div>
              </div>
            ))}
          </div>
          {/* <p>Total Price: ${totalPrice}</p> */}
        </div>
        <div className="mini-checkout-box">
          <div className="mini-checkout">
            <div className="subtotal">
              <p style={{ fontWeight: "bold" }}>Subtotal:</p>
              <p>$2,000,998</p>
            </div>
            <div className="tax">
              <p style={{ fontWeight: "bold" }}>Sales Tax:</p>
              <p>$100000</p>
            </div>
            <div className="discount">
              <p style={{ fontWeight: "bold" }}>Coupon Code:</p>
              <Link to={"#"}>Add Coupon</Link>
            </div>
            <div className="grand-total">
              <p style={{ fontWeight: "bold" }}>Grand Total:</p>
              <p>$3,000,0000</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
