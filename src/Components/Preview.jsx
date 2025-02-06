import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import PreviewHeader from "../Layout/PreviewHeader";
import Footer from "../Layout/Footer";

const preview = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        const data = await response.json();
        console.log(data);

        setInfo(data);
      } catch (error) {
        console.log("Something went wrong", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  function add() {
    return setIsAdded((prevState) => !prevState);
  }

  return (
    <>
      <PreviewHeader />
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ minHeight: "100vh" }}>
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
                <h2
                  style={{
                    lineHeight: "2.3",
                    fontWeight: "bold",
                  }}
                >
                  {info.title}
                </h2>
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
              <button className="add-to-cart-btn" onClick={add}>
                {!isAdded ? "Add To Cart" : "Added"}
              </button>
            </aside>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default preview;
