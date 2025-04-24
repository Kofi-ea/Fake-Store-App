import React from "react";
import DeleteUpload from "./DeleteUpload";
const UploadProducts = ({ id, name, about, image }) => {
  return (
    <div
      style={{
        width: "200px",

        backgroundColor: "white",
        border: "1px solid black",
      }}
    >
      <img className="product-image" src={image} alt={about} />
      <div className="product-info">
        <p className="product-name">{name.substring(0, 20) + "..."}</p>
        {/*<p className="product-price">${price.toFixed(2)}</p>*/}
      </div>
      <button>Delete</button>
    </div>
  );
};

export default UploadProducts;
