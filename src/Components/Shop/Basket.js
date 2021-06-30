import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./DataProvider";
import { priceDisplay } from "./Products";

function Basket() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
        The Cart is Empty
      </h2>
    );

  return (
    <>
      {cart.map((product) => (
        <div className="cart" key={product.id}>
          <img src={product.img} alt="" />

          <div className="box">
            <h2>{product.name}</h2>
            <h3>€ {priceDisplay(product.price)}</h3>

            <div className="amount">
              <button className="count" onClick={() => reduction(product.id)}>
                {" "}
                -{" "}
              </button>
              <span>{product.count}</span>
              <button className="count" onClick={() => increase(product.id)}>
                {" "}
                +{" "}
              </button>
            </div>

            <div className="delete" onClick={() => removeProduct(product.id)}>
              X
            </div>
          </div>
        </div>
      ))}

      <div className="total">
        <h3>Total: € {priceDisplay(total)}</h3>
      </div>
    </>
  );
}

export default Basket;
