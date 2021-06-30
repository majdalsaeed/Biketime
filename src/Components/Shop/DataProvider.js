import React, { createContext, useState } from "react";
import items from "./data";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState(items);
  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
