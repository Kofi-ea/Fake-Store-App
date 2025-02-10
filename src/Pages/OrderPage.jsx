import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const OrderPage = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fullDate = date.toLocaleDateString("en-US", options);

  return (
    <>
      <Header />
      <div className="order-page">
        <h1 style={{ textAlign: "center", fontFamily: "arial" }}>
          Your Orders
        </h1>
        <div className="order-list">
          <div className="order-details-header">
            <p>Ordered on : {fullDate}</p>
            <p>Total: $350.56</p>
            <p>Order Id: 23wgr-456-t453</p>
          </div>
          <div className="order-details">
            <div className="order-desc">
              <img
                src="https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/642274/1.jpg?8420"
                alt="black socks"
              />
              <div className="order-desc-info">
                <p>Black and Gray athletic socks</p>
                <p>Quantity : 2</p>
                <p>Category : Men's clothing</p>
              </div>
            </div>
            <div>$20.45</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;
