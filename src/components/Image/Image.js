import React, { useEffect } from "react";
import "./Image.css";
const Image = (props) => {
  const { id, width, height, src, objectFit } = props.imageObj;
  useEffect(() => {
    const img = document.getElementById(id);
    if (img != null) {
      if (typeof width != "undefined") img.style.width = width;
      if (typeof height != "undefined") img.style.height = height;
      if (typeof objectFit != "undefined") img.style.objectFit = objectFit;
    }
  });
  return (
    <>
      <img id={id} className='img-component' src={src} alt='logo' />
    </>
  );
};

export default Image;
