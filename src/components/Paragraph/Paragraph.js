import React, { useEffect } from "react";
import "./Paragraph.css";
const Paragraph = (props) => {
  const {
    id,
    size,
    weight,
    content,
    color,
    font,
    align,
    padding,
    fontWeight,
  } = props.paragraphObj;
  useEffect(() => {
    const pElement = document.getElementById(id);
    if (pElement != null) {
      if (typeof color != "undefined") pElement.style.color = color;
      if (typeof font != "undefined") pElement.style.fontFamily = font;
      if (typeof align != "undefined") pElement.style.textAlign = align;
      if (typeof padding != "undefined") pElement.style.padding = padding;
      if (typeof fontWeight != "undefined")
        pElement.style.fontWeight = fontWeight;
    }
  });
  return (
    <>
      <p id={id} className={size + " " + weight}>
        {content}
      </p>
    </>
  );
};

export default Paragraph;
