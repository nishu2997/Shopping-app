import React, { useEffect, useState } from "react";
import ImageThumbnailGrid from "../ImageThumbnailGrid/ImageThumbnailGrid";
import Image from "../Image/Image";
import "./ProductImageBox.css";
const ProductImageBox = () => {
  const images = [
    {
      id: "oneplus-img-1",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/41KbZZgECVL._AC_SR38,50_.jpg",
    },
    {
      id: "oneplus-img-2",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/31Sr7kgWwZL._AC_SR38,50_.jpg",
    },
    {
      id: "oneplus-img-3",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/41hdyxjxV1L._AC_SR38,50_.jpg",
    },
    {
      id: "oneplus-img-4",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/31-T2tncmLL._AC_SR38,50_.jpg",
    },
  ];
  const biggerImages = [
    {
      id: "oneplus-img-1",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/71Lx9l3NivL._AC_SY879_.jpg",
    },
    {
      id: "oneplus-img-2",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/61xeAF6pAoL._AC_SX679_.jpg",
    },
    {
      id: "oneplus-img-3",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/61T0DkKlXNL._AC_SX679_.jpg",
    },
    {
      id: "oneplus-img-4",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/61G1Oq5uKQL._AC_SX679_.jpg",
    },
  ];
  const [activeImage, setActiveImage] = useState(biggerImages[0]);
  const renderImage = (id) => {
    const imageList = biggerImages.filter((image) => image.id == id);
    setActiveImage(imageList[0]);
  };
  return (
    <div className='product-image-box-component'>
      <div className='product-image-thumbnail-box'>
        <ImageThumbnailGrid
          imageThumbnailGridObj={{
            id: "product-image-thumbnail-1",
            images: images,
            handleRender: renderImage,
          }}
        />
      </div>
      <div className='product-image-box'>
        <Image
          imageObj={{
            id: "active-product-image-thumbnail",
            width: "auto",
            height: "450px",
            src: activeImage.url,
          }}
        />
      </div>
    </div>
  );
};

export default ProductImageBox;
