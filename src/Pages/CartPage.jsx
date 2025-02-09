import React, { useState } from "react";
import { useEffect } from "react";
import CartHeader from "../Layout/CartHeader";
import Footer from "../Layout/Footer";
import { FaCircleXmark, FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CheckoutModal from "../Components/CheckoutModal";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [wantsCheckout, setWantsCheckOut] = useState(false);

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
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItemFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((info) => info.id !== itemToRemove.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    const taxRate = 0.1; // 10% tax
    return subtotal * taxRate;
  };

  const calculateGrandTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax();
    return subtotal + tax;
  };

  function proceedToCheckout() {
    return setWantsCheckOut((prevState) => !prevState);
  }

  return (
    <>
      {wantsCheckout && <CheckoutModal close={proceedToCheckout} cart={cart} />}
      <CartHeader cart={cart} />
      {cart.length == 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-msg">
            <p style={{ fontSize: "3.5rem" }}>Your Cart is Empty</p>
            <Link to={"/"}>
              <button>Shop Now!!!</button>{" "}
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-page">
          <h2 className="cart-title">
            Your Shopping Cart has {cart.length}{" "}
            {cart.length > 1 ? "items" : "item"}
          </h2>

          <div className="cart-group">
            <div className="cart-item">
              <div className="table-header">
                <p style={{ width: "30%" }}>Product</p>
                <p style={{ width: "5%" }}>Price</p>
                <p
                  style={{
                    width: "10%",

                    textAlign: "center",
                  }}
                >
                  Quantity
                </p>
                <p style={{ width: "14%" }}>Total</p>
              </div>

              {cart.map((info) => (
                <div key={info.title} className="cart-item-info">
                  <div className="product">
                    <img src={info.image} alt={info.title} />
                    <p>{info.title}</p>
                  </div>

                  <p className="price">${info.price}</p>
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
                    <FaCircleXmark
                      onClick={() => removeItemFromCart(info)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mini-checkout-box">
            <div className="mini-checkout">
              <div className="subtotal">
                <p style={{ fontWeight: "bold" }}>Subtotal:</p>
                <p>${calculateSubtotal().toFixed(2)}</p>
              </div>
              <div className="tax">
                <p style={{ fontWeight: "bold" }}>Sales Tax:</p>
                <p>${calculateTax().toFixed(2)}</p>
              </div>
              <div className="discount">
                <p style={{ fontWeight: "bold" }}>Coupon Code:</p>
                <Link to={"#"}>Add Coupon</Link>
              </div>
              <div className="grand-total">
                <p style={{ fontWeight: "bold" }}>Grand Total:</p>
                <p style={{ fontSize: "1.5rem" }}>
                  ${calculateGrandTotal().toFixed(2)}
                </p>
              </div>
              <div className="checkout-btns">
                <button
                  style={{ backgroundColor: "white", color: "black" }}
                  onClick={proceedToCheckout}
                >
                  Proceed to checkout
                </button>
                <p style={{ margin: "10px 0px" }}>OR</p>
                <Link to={"/"}>
                  <button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    Continue shopping!!!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CartPage;
