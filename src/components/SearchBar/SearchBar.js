import React, { useEffect, useState } from "react";
import Image from "../Image/Image";
import Input from "../Input/Input";
import "./SearchBar.css";
import logo from "./search-icon.svg";
import products from "../../products";
import ProductSuggestion from "../ProductSuggestion/ProductSuggestion";
import Paragraph from "../Paragraph/Paragraph";
import Flex from "../Flex/Flex";
const SearchBar = () => {
  const [value, setValue] = useState("");
  const [productList, setProductList] = useState(products);
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const updateProducts = () => {
    if (value != "") {
      setProductList(
        products.filter(
          (product) =>
            product.name.toLowerCase().indexOf(value.toLowerCase()) === 0
        )
      );
    } else setProductList(products);
  };
  const changeHeight = () => {
    const suggestion = document.querySelector(".search-bar-suggestion");
    if (productList.length >= 9) suggestion.style.height = "306px";
    else if (productList.length != 0) {
      suggestion.style.height = productList.length * 34 + "px";
    } else suggestion.style.height = "34px";
  };
  const handleFocus = () => {
    const suggestion = document.querySelector(".search-bar-suggestion");
    changeHeight();
    suggestion.style.transform = "scale(1, 1)";
  };
  const handleBlur = () => {
    const suggestion = document.querySelector(".search-bar-suggestion");
    suggestion.style.transform = "scale(1, 0)";
  };
  useEffect(() => {
    updateProducts();
  }, [value]);

  useEffect(() => {
    changeHeight();
  }, [productList]);
  return (
    <div className='search-bar-component'>
      <Input
        inputObj={{
          id: "header-search-bar",
          type: "text",
          name: "searchBar",
          value: value,
          placeholder: "search products",
          handleChange: handleOnChange,
          handleFocus: handleFocus,
          handleBlur: handleBlur,
        }}
      />
      <Image
        imageObj={{
          id: "search-bar-button-img",
          width: "30px",
          height: "30px",
          src: logo,
        }}
      />
      {productList.length != 0 ? (
        <div className='search-bar-suggestion'>
          <ProductSuggestion productList={productList.slice(0, 9)} />
        </div>
      ) : (
        <div className='search-bar-suggestion'>
          <Paragraph
            paragraphObj={{
              id: "search-bar-not-found-result",
              size: "small",
              weight: "normal",
              content: "result not found",
              color: "black",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
