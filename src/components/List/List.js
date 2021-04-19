import React from "react";
import "./List.css";
const List = (props) => {
  const listItem = props.children;
  const { align, width } = props.listObj;
  return (
    <>
      <li className={align + " " + width}>{listItem}</li>
    </>
  );
};

export default List;
