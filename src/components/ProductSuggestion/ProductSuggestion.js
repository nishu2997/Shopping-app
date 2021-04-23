import React, { useEffect, useState } from "react";
import List from "../List/List";
import Paragraph from "../Paragraph/Paragraph";
import UnorderedList from "../UnorderedList/UnorderedList";
import "./ProductSuggestion.css";
const ProductSuggestion = (props) => {
  const productList = props.productList;
  return (
    <div className='product-suggestion-component'>
      <UnorderedList
        unorderedListObj={{
          id: "search-bar-product-suggestion",
          gridColumns: "1",
          width: "parent-width",
          align: "center",
          colGap: "0px",
          rowGap: "8px",
          padding: "0px",
        }}
      >
        {productList.map((product) => (
          <List
            key={"key-product-suggestion-" + product.id}
            listObj={{
              id: "key-product-suggestion-li-" + product.id,
              align: "left",
              width: "parent-width",
              padding: "0px",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: "product-suggestion-list-p-" + product.id,
                size: "medium",
                weight: "normal",
                content: product.name.toLowerCase(),
                color: "black",
                padding: "2px 10px 2px 10px",
              }}
            />
          </List>
        ))}
      </UnorderedList>
    </div>
  );
};

export default ProductSuggestion;
