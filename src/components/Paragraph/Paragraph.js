import React, { useEffect } from "react";
import "./Paragraph.css";
const Paragraph = (props) => {
  const { id, size, weight, content, color, font } = props.paragraphObj;
  useEffect(() => {
    const pElement = document.getElementById(id);
    if (pElement != null) {
      if (typeof color != "undefined") pElement.style.color = color;
      if (typeof font != "undefined") pElement.style.fontFamily = font;
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
