import React from "react";
import {
  addToDb,
  deleteShoppingCart,
  removeFromDb,
} from "../../Utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, id, price } = props.cosmetic;

  const addToCart = (id) => {
    addToDb(id);
  };
  const addToCartWithParametter = () => {
    addToCart(id);
  };

  const removeFromCart = (id) => {
    removeFromDb(id);
  };

  return (
    <div className="product">
      <h2>Buy this: {name}</h2>
      <p>Only for: ${price}</p>
      <p>
        <small>It has id:{id}</small>
      </p>

      <button onClick={() => addToCart(id)}>Add to Cart ShortCut</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
      <button onClick={() => deleteShoppingCart()}>Clear All</button>
    </div>
  );
};

export default Cosmetic;
