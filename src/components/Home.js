import React from "react";
import { faker } from "@faker-js/faker";
import { useContext } from "react";
import SingleProduct from "./SingleProduct";
import "./styles.css";
import { CartContext } from "../Context";

faker.seed(50);

const Home = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="productContainer">
      {products.map(product => (
        <SingleProduct prod={product} key={product.id} />
      ))}
    </div>
  );
};

export default Home;
