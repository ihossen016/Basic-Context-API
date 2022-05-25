import React from "react";
import { useEffect, useState, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "../Context";

const Cart = () => {
  const [total, setTotal] = useState();
  const { cart } = useContext(CartContext);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: {total}$</span>
      <div className="productContainer">
        {cart.map(prod => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
