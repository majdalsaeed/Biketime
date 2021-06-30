import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

export const priceDisplay = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

function Products() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  return (
    <div className="products">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <Link to={"#"}>
            <img src={product.img} alt="" />
          </Link>
          <div className="box">
            <h3>{product.name}</h3>
            <h4>€ {priceDisplay(product.price)}</h4>
            <button onClick={() => addCart(product.id)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;