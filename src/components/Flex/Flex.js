import React, { useEffect } from "react";
import "./Flex.css";
const Flex = (props) => {
  const { id, align, width, height, bgColor } = props.flexObj;
  useEffect(() => {
    const flex = document.getElementById(id);
    if (flex != null) {
      if (typeof width != "undefined") flex.style.width = width;
      if (typeof height != "undefined") flex.style.height = height;
      if (typeof bgColor != "undefined") flex.style.backgroundColor = bgColor;
    }
  });
  return (
    <>
      <div id={id} className={"flex " + align}>
        {props.children}
      </div>
    </>
  );
};

export default Flex;
