import React from "react";
import { useState, useEffect } from "react";
import UploadProducts from "./UploadProducts";

const VendorDashboard = () => {
  const [yourUploads, setYourUploads] = useState([]);

  const fetchMyUploads = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setYourUploads(data);
    } catch (error) {
      console.log("Something went wrong with the fetching", error);
    }
  };

  useEffect(() => {
    fetchMyUploads();
  }, []);
  return (
    <>
      <div
        style={{
          marginTop: "80px",
          backgroundColor: "pink",
          minHeight: "100vh",
        }}
      >
        <h1>Welcome Vendor</h1>
        <p>You have uploaded [3] products</p>
        <div>
          {yourUploads.map((upload) => {
            return (
              <UploadProducts
                key={upload.id}
                id={upload.id}
                name={upload.title}
                //  category = {product.category}
                about={upload.description}
                //price={post.price}
                image={upload.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VendorDashboard;
