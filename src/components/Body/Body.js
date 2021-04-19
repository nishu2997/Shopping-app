import React, { useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import ProductList from "../ProductList/ProductList";
import "./Body.css";
import SignIn from "../SignIn/SignIn";
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
