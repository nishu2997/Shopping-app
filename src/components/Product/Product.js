import React, { useContext, useEffect } from "react";
import UnorderedList from "../UnorderedList/UnorderedList";
import List from "../List/List";
import Image from "../Image/Image";
import AppContext from "../../contexts/AppContext";
import "./Product.css";
import Paragraph from "../Paragraph/Paragraph";
const Product = (props) => {
  const { id, name, url, ram, rom, processor, price } = props.product;
  const windowSize = useContext(AppContext).window.windowSize;

  const handleOnMouseOver = () => {
    const imgOfProduct = document.getElementById(id + "-img");
    imgOfProduct.style.transition = "transform 100ms ease";
    imgOfProduct.style.transform = "perspective(200px) translateZ(10px)";
  };
  const handleOnMouseOut = () => {
    const imgOfProduct = document.getElementById(id + "-img");
    imgOfProduct.style.transition = "";
    imgOfProduct.style.transform = "";
  };

  const GetProduct = (props) => {
    const { rowGap, imgHeight } = props;
    return (
      <UnorderedList
        unorderedListObj={{
          id: id,
          gridColumns: "1",
          width: "parent-width",
          align: "center",
          colGap: "10px",
          rowGap: rowGap,
        }}
      >
        <List
          listObj={{
            id: id + "-list-1",
            align: "center",
            width: "parent-width",
          }}
        >
          <Image
            imageObj={{
              id: id + "-img",
              width: "auto",
              height: imgHeight,
              src: url,
            }}
          />
        </List>
        <List
          listObj={{
            id: id + "-list-2",
            align: "center",
            width: "parent-width",
          }}
        >
          <Paragraph
            paragraphObj={{
              id: id + "-paragraph-1",
              size: "big",
              weight: "bolder",
              content: name,
              color: "black",
            }}
          />
        </List>
        <List
          listObj={{
            id: id + "-list-3",
            align: "center",
            width: "parent-width",
          }}
        >
          <Paragraph
            paragraphObj={{
              id: id + "-paragraph-2",
              size: "medium",
              weight: "normal",
              content: ram + " " + rom,
              color: "black",
            }}
          />
        </List>
        <List
          listObj={{
            id: id + "-list-4",
            align: "center",
            width: "parent-width",
          }}
        >
          <Paragraph
            paragraphObj={{
              id: id + "-paragraph-3",
              size: "medium",
              weight: "normal",
              content: processor,
              color: "black",
            }}
          />
        </List>
        <List
          listObj={{
            id: id + "-list-5",
            align: "center",
            width: "parent-width",
          }}
        >
          <Paragraph
            paragraphObj={{
              id: id + "-paragraph-4",
              size: "medium",
              weight: "bold",
              content: "Rs. " + price,
              color: "black",
            }}
          />
        </List>
      </UnorderedList>
    );
  };
  return (
    <div
      className='product-component'
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      {windowSize > 1000 ? (
        <GetProduct rowGap='3px' imgHeight='200px' />
      ) : windowSize > 800 ? (
        <GetProduct rowGap='2px' imgHeight='150px' />
      ) : (
        <GetProduct rowGap='1px' imgHeight='150px' />
      )}
    </div>
  );
};

export default Product;
