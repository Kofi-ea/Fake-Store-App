import React from "react";
import { Link } from "react-router-dom";

const CartHeader = ({ cart }) => {
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
            <Link to={"/"}>
              <li>Publicly Available</li>
            </Link>

            <li>Archived</li>
            <li>About</li>
          </ul>
        </div>
        <div className="cart-link">
          <li>
            Cart <span>( {cart.length} )</span>
          </li>
        </div>
      </div>
    </>
  );
};

export default CartHeader;
