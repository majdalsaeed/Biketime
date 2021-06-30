import React from "react";
import { DataProvider } from "../Shop/DataProvider";
import Basket from "../Shop/Basket";
import "./Cart.css";

function Cart() {
  return (
    <DataProvider>
      <Basket />
    </DataProvider>
  );
}

export default Cart;