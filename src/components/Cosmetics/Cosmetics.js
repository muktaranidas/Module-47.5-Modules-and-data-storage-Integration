import React, { useEffect, useState } from "react";
import { getTotal } from "../../Utilities/calculate";
import Cosmetic from "../Cosmetic/Cosmetic";
// import { add } from "../../Utilities/calculate";
// // import add from "../../Utilities/calculate";

const Cosmetics = () => {
  // const first = 55;
  // const second = 66;
  // const total = add(first, second);
  // const cosmetics = [
  //   {
  //     id: "63316cdc5e85af8ebd12d509",
  //     price: 227,
  //     name: "Goff Charles",
  //   },
  //   {
  //     id: "63316cdc0d3cc1c755144edd",
  //     price: 199,
  //     name: "Owens Rutledge",
  //   },
  //   {
  //     id: "63316cdc6e297d97baa6ca4c",
  //     price: 101,
  //     name: "Terri Levine",
  //   },
  //   {
  //     id: "63316cdcc6688dcf8bf5b42f",
  //     price: 349,
  //     name: "Enid Barr",
  //   },
  //   {
  //     id: "63316cdc49b7141e1a50ed30",
  //     price: 434,
  //     name: "Mccarthy Coleman",
  //   },
  //   {
  //     id: "63316cdcea9edb6ca79ac676",
  //     price: 62,
  //     name: "Marguerite Vang",
  //   },
  //   {
  //     id: "63316cdc997ad6e55d94396d",
  //     price: 151,
  //     name: "Dee Mccall",
  //   },
  // ];

  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  const total = getTotal(cosmetics);

  return (
    <div>
      {/* <h2>This Is My Cosmatics Store</h2>
      <p>Total: {total}</p> */}
      <p>Money Needed: {total}</p>

      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
