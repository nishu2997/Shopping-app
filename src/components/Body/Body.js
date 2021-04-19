import React, { useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import ProductList from "../ProductList/ProductList";
import "./Body.css";
const Body = () => {
  return (
    <>
      <main id='body-main-tag'>
        <Carousel />
        <ProductList />
      </main>
    </>
  );
};

export default Body;
