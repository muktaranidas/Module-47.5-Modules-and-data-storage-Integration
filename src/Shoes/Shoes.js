import React from "react";
import { add, multiply } from "../Utilities/calculate";

const Shoes = () => {
  const first = 100;
  const second = 2;
  const result = add(first, second);
  const sum = multiply(first, second);
  return (
    <div>
      <h2>This Is Shoes Cornar</h2>
      <p>Result: {result}</p>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default Shoes;
