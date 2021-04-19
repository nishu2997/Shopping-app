import React from "react";
import { Link } from "react-router-dom";
import "./HyperLink.css";
const HyperLink = (props) => {
  const { to, link, width, align } = props.linkObj;
  return (
    <>
      <Link to={to} className={width + " " + align}>
        {link}
      </Link>
    </>
  );
};

export default HyperLink;
