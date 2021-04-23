import React from "react";
import ProductDescription from "../ProductDescription/ProductDescription";
import ProductHeading from "../ProductHeading/ProductHeading";
import ProductPrice from "../ProductPrice/ProductPrice";
import "./ProductDetails.css";
import quad_rear_camera from "../ProductDescription/quad_rear_camera.jpg";
import ProductSpecification from "../ProductSpecification/ProductSpecification";
const ProductDetails = () => {
  const descriptions = [
    {
      id: "oneplus-product-description-1",
      img:
        "https://rukminim1.flixcart.com/image/200/200/cms-rpd-images/3625046df8db4687b23069c72d1621c6_17651c4ae81_image.png?q=90",
      title: "superAmoled + Dual Pinhole Display",
      body:
        "This mobile phone features 6.44 inch superAmoled + dual pinhole display and narrow bezels. Your fingers will be delighted by the smooth interaction with the screen, thanks to the 90 Hz refresh rate. Gamers will be able to enhance their gaming performance with the 180 Hz touch sampling rate that betters the screen response time.",
    },
    {
      id: "oneplus-product-description-2",
      img:
        "https://rukminim1.flixcart.com/image/200/200/cms-rpd-images/ddef72549dcf4aa0a9d15070380325eb_174e2e04dba_image.jpeg?q=90",
      title: "5G-ready and Performance",
      body:
        "With 8 GB of RAM and the Qualcomm Snapdragon 765G processor, this smartphone will give you a performance you can count on for all your phone-related tasks. This smartphone is 5G-ready as well! Oh, and it also features 128 GB of storage space so that you can store everything in one place.",
    },
    {
      id: "oneplus-product-description-3",
      img: quad_rear_camera,
      title: "48MP Quad-Rear Camera",
      body:
        "Take your love for photography up a notch as this smartphone is equipped with a 48 MP quad rear camera setup. Every wide-angle or close-up shot that you capture via this smartphone is vivid, sharp, and bright, so you can show off your skills on various social media platforms and woo your followers. Not only that, but you can also capture stunning photos even in dimly lit environments, thanks to the Night Vision mode.",
    },
  ];

  const specifications = [
    {
      id: "oneplus-nord-specs-1",
      title: "Display Features",
      features: {
        "Display Size": "6.44 inch",
        Resolution: "2400 x 1080",
        "Resolution Type": "Full HD+",
      },
    },
    {
      id: "oneplus-nord-specs-2",
      title: "Memory & Storage Features",
      features: {
        "Internal Storage": "128 GB",
        RAM: "8 GB",
        "Expandable Storage": "1 TB",
        "Supported Memory Card Type": "microSD",
        "Memory Card Slot Type": "Hybrid Slot",
      },
    },
    {
      id: "oneplus-nord-specs-3",
      title: "Os & Processor Features",
      features: {
        "Operating System": "Android",
        "Processor Type": "Qualcomm Snapdragon 765G",
        "Processor Core": "Octa Core",
        "Primary Clock Speed": "2.4 GHz",
      },
    },
  ];
  return (
    <div className='product-details-component'>
      <div className='product-details-product-heading'>
        <ProductHeading
          productHeadingObj={{
            id: "product-oneplus-mobile",
            name: "OnePlus Nord 5G",
            color: "Blue Marble",
            ram: "8GB",
            rom: "128GB",
            price: "28999",
          }}
        />
      </div>
      <div className='product-details-product-price'>
        <ProductPrice
          productPriceObj={{
            id: "product-oneplus-mobile",
            currentPrice: "28999",
            originalPrice: "29999",
          }}
        />
      </div>
      <div className='product-details-product-description'>
        <ProductDescription
          productDescriptionObj={{
            id: "product-oneplus-mobile-description",
            descriptions: descriptions,
          }}
        />
      </div>
      <div className='product-details-product-specification'>
        <ProductSpecification
          productSpecificationObj={{
            id: "product-oneplus-mobile-specification",
            specifications: specifications,
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
