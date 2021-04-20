import React from "react";
import "./Form.css";
const Form = (props) => {
  const { id, handleSubmit } = props.formObj;
  return (
    <>
      <form className='form-component' onSubmit={handleSubmit}>
        {props.children}
      </form>
    </>
  );
};

export default Form;
