import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../Components/AuthContext";

const UploadProductForm = () => {
  const initialValues = {
    title: "",
    price: "$",
    description: "",
    category: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [isUploaded, setIsUploaded] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);

    const uploadProduct = async () => {
      try {
        const data = await fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formValues, vendorId: user.uid }),
        });
      } catch (error) {
        console.log("Upload was unsuccesful", error);
      }
    };

    uploadProduct();

    setTimeout(() => {
      setIsUploaded(true);
      setTimeout(() => {
        setIsUploaded(false);
      }, 2800);
    }, 1000);
  };
  return (
    <>
      <p className={`uploaded-msg ${isUploaded ? "active" : ""}`}>
        {isUploaded ? `Your product has been uploaded to the store` : ""}
      </p>
      ;
      <div
        style={{
          backgroundColor: "blue",
          paddingTop: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form action="" onSubmit={handleSubmit} className="vendor-form">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={formValues.title}
              placeholder="Product title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="image-upload">Upload Image:</label>
            <input type="file" id="image-upload" accept="image/*" />
          </div>

          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={formValues.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              value={formValues.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="category"></label>
            <select
              name="category"
              id="category"
              value={formValues.category}
              onChange={handleChange}
            >
              <option>Select Category</option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="women's clothing">women's clothing</option>
              <option value="electronics">electronics</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default UploadProductForm;
