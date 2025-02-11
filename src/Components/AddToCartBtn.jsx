import React from "react";
import { useState, useEffect } from "react";

const AddToCartBtn = ({ add, productId }) => {
  //   const [isAdded, setIsAdded] = useState(false);

  const [isAdded, setIsAdded] = useState(() => {
    const savedState = localStorage.getItem(`added-${productId}`);
    return savedState === "true"; // Parse saved state from localStorage
  });

  //   useEffect(() => {
  //     // Check localStorage to see if the product has already been added
  //     const storedState = localStorage.getItem(`added-${productId}`);
  //     if (storedState === "true") {
  //       setIsAdded(true);
  //     }
  //   }, [productId]);

  const handleClick = () => {
    // Call the existing function
    add();

    // Then set the state to disable the button and change text
    setIsAdded(true);
    localStorage.setItem(`added-${productId}`, "true");
  };
  return (
    <>
      <button
        onClick={handleClick}
        disabled={isAdded}
        className={`add-to-cart-btn ${isAdded ? "added" : ""}`}
      >
        {isAdded ? "Added" : "Add to cart"}
      </button>
    </>
  );
};

export default AddToCartBtn;
