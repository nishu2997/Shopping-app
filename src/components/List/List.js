import React, { useEffect } from "react";
import "./List.css";
const List = (props) => {
  const listItem = props.children;
  const { id, align, width, padding } = props.listObj;
  useEffect(() => {
    const liElement = document.getElementById(id);
    if (liElement != null) {
      if (typeof padding != "undefined") liElement.style.padding = padding;
    }
  });
  return (
    <>
      <li id={id} className={align + " " + width}>
        {listItem}
      </li>
    </>
  );
};

export default List;
