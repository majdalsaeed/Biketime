import React from "react";
import { DataProvider } from "./DataProvider";
import Products from "./Products";
import "./Shop.css";

function Shop() {
  return (
    <DataProvider>
      <Products />
    </DataProvider>
  );
}

export default Shop;
