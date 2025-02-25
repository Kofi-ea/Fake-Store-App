import React from "react";
import { useState, useEffect } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import Loading from "../Components/Loading";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import PreviewHeader from "../Layout/PreviewHeader";
import Footer from "../Layout/Footer";
import AddToCartBtn from "./AddToCartBtn";

const preview = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        const data = await response.json();
        // console.log(data);

        setInfo(data);
      } catch (error) {
        console.log("Something went wrong", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const addToCart = (info) => {
    // setIsAdded((prevState) => !prevState);

    try {
      // get the existing cart or use an empty array if not found
      const prevCart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if the product is already in the cart by checking product ID
      const isProductInCart = prevCart.some((item) => item.id === info.id);

      if (!isProductInCart) {
        // If the product isn't already in the cart, add it to the cart
        const updatedInfo = { ...info, quantity: 1 };
        const updatedCart = [...prevCart, updatedInfo];

        // Save the updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        // Update the state to reflect the changes
        setCart(updatedCart);
        setIsActive(!isActive);
      } else {
        alert("This product is already in the cart.");
      }
    } catch (error) {
      console.error("Error while adding item to cart:", error);
    }
  };
  console.log(cart);
  console.log(typeof cart);

  return (
    <>
      <PreviewHeader cart={cart.length} />
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ minHeight: "100vh", marginTop: "100px" }}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <button className="back-btn">
              <FaArrowLeft />
              Back
            </button>
          </Link>

          <div className="preview">
            <div className="preview-img-box">
              <img className="preview-img" src={info.image} alt={info.title} />
            </div>
            <aside>
              <div className="info">
                <h2 className="info-title">{info.title}</h2>
                <p style={{ lineHeight: "2.3", fontWeight: "bold" }}>
                  *price: ${info.price.toFixed(2)}
                </p>
                <p
                  style={{
                    lineHeight: "1.3",
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                >
                  {info.description}
                </p>
                <p
                  style={{
                    lineHeight: "1.5",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  *category: {info.category}
                </p>
                <p style={{ lineHeight: "1.3", fontWeight: "bold" }}>
                  *ratings: {info.rating.rate}
                </p>
                <p style={{ lineHeight: "1.3", fontWeight: "bold" }}>
                  *stock left: {info.rating.count}
                </p>
              </div>
              <AddToCartBtn add={() => addToCart(info)} productId={info.id} />
              {/* <button
                onClick={() => addToCart(info)}
                className={isActive && "active"}
              >
                {!isAdded ? "Add To Cart" : "Added"}
              </button> */}
            </aside>
          </div>
        </div>
      )}

      {/* <Routes>
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
      </Routes> */}

      <Footer />
    </>
  );
};

export default preview;
