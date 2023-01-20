// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart;

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }

  // add quantity
  const quantity = shoppingCart[id];
  console.log(quantity);
  if (quantity) {
    const newQuantity = quantity + 1;
    console.log(newQuantity);
    shoppingCart[id] = newQuantity;
    console.log(shoppingCart[id]);
  } else {
    shoppingCart[id] = 1;
    console.log(shoppingCart[id]);
    // console.log("new item");
    // localStorage.setItem(id, 1);
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCrt = JSON.parse(storedCart);
    if (id in shoppingCrt) {
      delete shoppingCrt[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCrt));
    }
  }
};
const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, deleteShoppingCart };
