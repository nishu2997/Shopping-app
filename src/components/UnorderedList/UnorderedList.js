import React, { useEffect } from "react";
import "./UnorderedList.css";

const UnorderedList = (props) => {
  const listItems = props.children;
  const {
    id,
    gridColumns,
    width,
    align,
    colGap,
    rowGap,
    backgroundColor,
    padding,
  } = props.unorderedListObj;
  useEffect(() => {
    const ul = document.getElementById(id);
    if (ul != null) {
      if (typeof colGap != "undefined") ul.style.columnGap = colGap;
      if (typeof rowGap != "undefined") ul.style.rowGap = rowGap;
      if (typeof backgroundColor != "undefined")
        ul.style.backgroundColor = backgroundColor;
      if (typeof padding != "undefined") ul.style.padding = padding;
    }
  });
  return (
    <>
      <ul
        id={id}
        className={
          "col-" + gridColumns + " unordered-list" + " " + width + " " + align
        }
      >
        {listItems}
      </ul>
    </>
  );
};

export default UnorderedList;
