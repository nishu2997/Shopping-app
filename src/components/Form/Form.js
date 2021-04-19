import React from "react";
import "./Form.css";
const Form = (props) => {
  const { id } = props.formObj;
  return (
    <>
      <form className='form-component'>{props.children}</form>
    </>
  );
};

export default Form;
