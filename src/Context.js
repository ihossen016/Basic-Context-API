import React from "react";
import { createContext, useState } from "react";
import { faker } from "@faker-js/faker";

export const CartContext = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.food(),
  }));

  const [products] = useState(productsArray);

  return (
    <CartContext.Provider value={{ cart, setCart, products }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;
