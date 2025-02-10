import React from "react";
import Products from "../Components/Products";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import Banners from "../Components/Banners";

const Page = () => {
  const [store, setStore] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [visibleOptions, setVisibleOptions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allOptions, setAllOptions] = useState(true);
  const [activeButton, setActiveButton] = useState("All");

  const received = async () => {
    //https://fakestoreapi.com/products = fake store api
    //https://api.escuelajs.co/api/v1/products = piatzi store api

    try {
      const response = await fetch(`https://fakestoreapi.com/products`);

      const data = await response.json();
      // console.log(data);

      setStore(data);
      // setVisibleOptions(data.slice(0, 8));
      setFilteredData(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    received();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);

    if (category === "All") {
      setFilteredData(store);
    } else {
      const filtered = store.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="main-page">
          <Banners />
          <div className="title-box">
            <h2 className="title">STORE</h2>
          </div>
          <div>
            <div className="filter-btns">
              <button
                onClick={() => handleCategoryClick("All")}
                className={activeButton === "All" ? "active" : "inactive"}
              >
                All
              </button>
              <button
                onClick={() => handleCategoryClick("men's clothing")}
                className={
                  activeButton === "men's clothing" ? "active" : "inactive"
                }
              >
                Men's clothing
              </button>
              <button
                onClick={() => handleCategoryClick("women's clothing")}
                className={
                  activeButton === "women's clothing" ? "active" : "inactive"
                }
              >
                Women's clothing
              </button>
              <button
                onClick={() => handleCategoryClick("jewelery")}
                className={activeButton === "jewelery" ? "active" : "inactive"}
              >
                Jewellry
              </button>
              <button
                onClick={() => handleCategoryClick("electronics")}
                className={
                  activeButton === "electronics" ? "active" : "inactive"
                }
              >
                Electronics
              </button>
            </div>

            <div className="products-grid">
              {!allOptions
                ? store.map((product) => {
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
                : filteredData.map((product) => {
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
          </div>
          {/* <div className="show-more-btn">
            <button onClick={showMore}>
              {hideOptions ? "Show More" : "Hide"}
            </button>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Page;
