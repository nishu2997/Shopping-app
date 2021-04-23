import React, { useEffect } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductImageBox from "../ProductImageBox/ProductImageBox";
import "./ProductComponent.css";
const ProductComponent = () => {
  return (
    <div className='product-component-component'>
      <div className='product-component-left-element'>
        <div className='product-component-product-image'>
          <ProductImageBox />
        </div>
        <div className='product-component-buy-now'>
          <button type='button'>Buy Now</button>
        </div>
      </div>
      <div className='product-component-product-details'>
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductComponent;
