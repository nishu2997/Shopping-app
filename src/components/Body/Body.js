import React, { useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import ProductList from "../ProductList/ProductList";
import "./Body.css";
import SignIn from "../SignIn/SignIn";
import ImageThumbnailGrid from "../ImageThumbnailGrid/ImageThumbnailGrid";
import ProductImageBox from "../ProductImageBox/ProductImageBox";
import ProductComponent from "../ProductComponent/ProductComponent";
const Body = () => {
  return (
    <>
      <main id='body-main-tag'>
        <ProductComponent />
      </main>
    </>
  );
};

export default Body;
