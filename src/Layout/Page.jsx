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
  const [selectedCategory, setSelectedCategory] = useState("All");
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

      const savedCategory = localStorage.getItem("selectedCategory");

      if (savedCategory) {
        setSelectedCategory(savedCategory);
        applyCategoryFilter(savedCategory, data);
      } else {
        setFilteredData(data); // No filter applied
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      received();
    }, 1500);
  }, []);

  const categories = store.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category);
    setActiveButton(category);

    applyCategoryFilter(category, store);
  };

  const applyCategoryFilter = (category, store) => {
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
          {/* <div className="title-box">
            <h2 className="title">STORE</h2>
          </div> */}
          <div>
            <div className="filter-btns">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={
                    selectedCategory === category ? "active" : "inactive"
                  }
                >
                  {category}
                </button>
              ))}
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
