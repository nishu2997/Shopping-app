import React from "react";
import Image from "../Image/Image";
import Paragraph from "../Paragraph/Paragraph";
import "./ProductHeading.css";
const ProductHeading = (props) => {
  const { id, name, color, ram, rom, price } = props.productHeadingObj;
  const ratingImage = (id) => {
    return (
      <Image
        imageObj={{
          id: id,
          width: "20px",
          height: "20px",
          src: "https://img.icons8.com/fluent/2x/star.png",
        }}
      />
    );
  };
  return (
    <div className='product-heading-component'>
      <div className='product-heading-name-color'>
        <Paragraph
          paragraphObj={{
            id: id + "-name-color",
            size: "extra-extra-big",
            weight: "normal",
            content: name + " (" + color + ") ",
            color: "black",
          }}
        />
      </div>
      <div className='product-heading-ram-rom'>
        <Paragraph
          paragraphObj={{
            id: id + "-ram-rom",
            size: "extra-big",
            weight: "normal",
            content: ram + ", " + rom,
            color: "black",
            font: "monospace",
          }}
        />
      </div>
      <div className='product-heading-rating-review'>
        <div className='product-heading-rating'>
          {ratingImage("product-heading-star-rating-img-1")}
          {ratingImage("product-heading-star-rating-img-2")}
          {ratingImage("product-heading-star-rating-img-3")}
          {ratingImage("product-heading-star-rating-img-4")}
          {ratingImage("product-heading-star-rating-img-5")}
        </div>
        <div className='product-heading-review'>
          <Paragraph
            paragraphObj={{
              id: id + "-review",
              size: "big",
              weight: "normal",
              content: "(25499 reviews)",
              color: "black",
              font: "monospace",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductHeading;
