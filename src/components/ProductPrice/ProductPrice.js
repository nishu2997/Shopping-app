import React from "react";
import "./ProductPrice.css";
import Paragraph from "../Paragraph/Paragraph";
const ProductPrice = (props) => {
  const { id, currentPrice, originalPrice } = props.productPriceObj;
  return (
    <div className='product-price-component'>
      <div className='product-price-deal-price'>
        <Paragraph
          paragraphObj={{
            id: id + "-deal-tag",
            size: "medium",
            weight: "normal",
            content: "Deal Price : ",
            color: "black",
          }}
        />
      </div>
      <div className='product-price-tax'>
        <div className='product-price-current-price'>
          <Paragraph
            paragraphObj={{
              id: id + "-price",
              size: "extra-big",
              weight: "bold",
              content: "₹ " + currentPrice,
              color: "black",
            }}
          />
        </div>
        <div className='product-price-inclusive-all tax'>
          <Paragraph
            paragraphObj={{
              id: id + "-inclusive-all-tax",
              size: "medium",
              weight: "normal",
              content: "(Inclusive all taxes)",
              color: "black",
              font: "monospace",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;
