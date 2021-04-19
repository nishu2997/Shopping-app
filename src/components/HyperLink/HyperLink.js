import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HyperLink.css";
const HyperLink = (props) => {
  const { id, to, link, width, align, color, bgColor, padding } = props.linkObj;
  useEffect(() => {
    const link = document.getElementById(id);
    if (link != null) {
      if (typeof color != "undefined") link.style.color = color;
      if (typeof padding != "undefined") link.style.padding = padding;
    }
  });
  const mouseOverHandler = () => {
    const link = document.getElementById(id);
    if (link != null) {
      if (typeof bgColor != "undefined") link.style.backgroundColor = bgColor;
    }
  };
  return (
    <>
      <Link
        id={id}
        to={to}
        className={width + " " + align}
        onMouseOver={mouseOverHandler}
      >
        {link}
      </Link>
    </>
  );
};

export default HyperLink;
