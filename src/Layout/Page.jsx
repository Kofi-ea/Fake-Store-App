import React from "react";
import Products from "../Components/Products";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import Banners from "../Components/Banners";

const Page = () => {
  const [store, setStore] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleOptions, setVisibleOptions] = useState([]);
  const [hideOptions, setHideOptions] = useState(true);

  const received = async () => {
    //https://fakestoreapi.com/products = fake store api
    //https://api.escuelajs.co/api/v1/products = piatzi store api

    try {
      const response = await fetch(`https://fakestoreapi.com/products`);

      const data = await response.json();
      console.log(data);

      setStore(data);
      setVisibleOptions(data.slice(0, 8));
    } catch (error) {
      console.log("Something went wrong", error);
    }

    setIsLoading(false);
  };

  console.log(store);

  useEffect(() => {
    received();
  }, []);

  const showMore = () => {
    return setHideOptions((prevState) => !prevState);
  };

  let update = visibleOptions.map((product) => {
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
        <div className="products-grid">
          {hideOptions
            ? visibleOptions.map((product) => {
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
              })
            : store.map((product) => {
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
              })}
        </div>
        <div className="show-more-btn">
          <button onClick={showMore}>
            {hideOptions ? "Show More" : "Hide"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
