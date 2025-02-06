import React from "react";
import { useState, useEffect } from "react";

const Banners = () => {
  const images = [
    "https://img.freepik.com/free-psd/luxury-men-s-fashion-facebook-template_23-2150871396.jpg?t=st=1738853913~exp=1738857513~hmac=f957c77bcd417f82124244b9c0ca8cc97e960841ae03dba38c7cc5130a32fe6f&w=900",
    "https://img.freepik.com/free-psd/women-s-fashion-design-template_23-2150877185.jpg",
    "https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg",
    "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143835.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearTimeout(interval); // Cleanup timeout on component unmount
  }, [currentImageIndex]);

  return (
    <>
      <div className="banners-box">
        <img
          className="banners"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
    </>
  );
};

export default Banners;
