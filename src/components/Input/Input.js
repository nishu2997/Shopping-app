import React, { useEffect, useState } from "react";
import "./Input.css";
const Input = (props) => {
  const {
    id,
    type,
    name,
    value,
    placeholder,
    borderBottom,
    handleChange,
    handleFocus,
    handleBlur,
    caretColor,
    color,
  } = props.inputObj;
  useEffect(() => {
    const inputField = document.getElementById(id);
    if (inputField != null) {
      if (typeof borderBottom != "undefined") {
        inputField.style.borderStyle = "solid";
        inputField.style.borderWidth = "0px 0px " + borderBottom + " 0px";
      }
      if (typeof caretColor != "undefined")
        inputField.style.caretColor = caretColor;
      if (typeof color != "undefined") inputField.style.color = color;
    }
  });
  return (
    <>
      {type == "radio" ? (
        <div className='radio-field'>
          <input
            id={id}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
          />
          <label>{value.charAt(0).toUpperCase + value.slice(1)}</label>
        </div>
      ) : (
        <input
          id={id}
          className='input-field'
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete='off'
        />
      )}
    </>
  );
};

export default Input;
