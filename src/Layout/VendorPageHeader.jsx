import React from "react";
import { Link } from "react-router-dom";
import SignOut from "../Components/SignOut";

const VendorPageHeader = () => {
  return (
    <>
      <div className="heading">
        <div className="logo-container">
          <img className="logo" src="" alt="" />
          <ul className="menu">
            <Link to={"/"}>
              <li>Front Store</li>{" "}
            </Link>
            <Link to={"/vendor"}>
              <li>Upload Product</li>{" "}
            </Link>
          </ul>
        </div>

        <SignOut />
      </div>
    </>
  );
};

export default VendorPageHeader;
