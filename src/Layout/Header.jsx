import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showCollection, setShowCollection] = useState(false);

  function show() {
    setShowCollection((prevState) => !prevState);
  }

  return (
    <>
      <div className="heading">
        <div className="logo-container">
          <img
            className="logo"
            src="https://images.squarespace-cdn.com/content/v1/6578b845fbaeb507c08c956b/105b77a2-7de6-484a-837d-9dc61d7cad5a/Logo03.png?format=1500w"
            alt=""
          />
          <ul className="menu">
            <li>Publicly Available</li>
            <li>Archived</li>
            <li>About</li>
            <li className="collection" onClick={show}>
              Collection
            </li>
            {showCollection && (
              <ul className="collection-menu">
                <li>Type 1</li>
                <li>Type 2</li>
                <li>Type 3</li>
                <li>Type 4</li>
              </ul>
            )}
          </ul>
        </div>
        <div className="cart-link">
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
