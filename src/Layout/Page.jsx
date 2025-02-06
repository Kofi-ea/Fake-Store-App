import React from "react";
import Products from "../Components/Products";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import Banners from "../Components/Banners";

const Page = () => {
  const [store, setStore] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hideOptions, setHideOptions] = useState(true);

  const received = async () => {
    //https://fakestoreapi.com/products = fake store api
    //https://api.escuelajs.co/api/v1/products = piatzi store api

    try {
      const response = await fetch(`https://fakestoreapi.com/products`);

      const data = await response.json();
      console.log(data);

      setStore(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }

    setIsLoading(false);
  };

  console.log(store);

  useEffect(() => {
    received();
  }, []);

  let update = store.map((product) => {
    return (
      <Products
        key={product.id}
        id={product.id}
        name={product.title}
        //  category = {product.category}
        about={product.description}
        price={product.price}
        image={product.image}
      />
    );
  });

  return (
    <>
      {isLoading && <Loading />}

      <div className="main-page">
        <Banners />
        <div className="title-box">
          <h2 className="title">STORE</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 320px 320px 320px",
            gap: "20px",
            padding: "40px",
          }}
        >
          {update}
        </div>
      </div>
    </>
  );
};

export default Page;
