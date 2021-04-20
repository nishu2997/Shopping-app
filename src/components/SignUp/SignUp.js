import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Form from "../Form/Form";
import Image from "../Image/Image";
import Paragraph from "../Paragraph/Paragraph";
import Input from "../Input/Input";
import "./SignUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(true);
  const [isOtpVerified, setIsOtpVerified] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleBack = () => {
    history.push(
      location.pathname.slice(0, location.pathname.indexOf("/signup"))
    );
  };
  const validateEmail = (inputField) => {
    if (email.length == 0) inputField.style.borderColor = "black";
    else if (email.endsWith("@gmail.com")) {
      inputField.style.borderColor = "blue";
      return true;
    } else inputField.style.borderColor = "red";
    return false;
  };
  const validateConfirmPassword = (inputField) => {
    if (confirmPassword.length == 0) inputField.style.borderColor = "black";
    else if (password === confirmPassword) {
      inputField.style.borderColor = "blue";
      return true;
    } else inputField.style.borderColor = "red";
    return false;
  };
  const validatePassword = (inputField) => {
    if (password.length == 0) inputField.style.borderColor = "black";
    else if (password.length >= 8) {
      inputField.style.borderColor = "blue";
      return true;
    } else inputField.style.borderColor = "red";
    return false;
  };
  const validateOtp = (inputField) => {
    if (otp.length == 0) inputField.style.borderColor = "black";
    else if (otp.length == 4) {
      inputField.style.borderColor = "blue";
      return true;
    } else inputField.style.borderColor = "red";
    return false;
  };
  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "otp":
        setOtp(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        break;
      default:
    }
  };
  const enableButton = () => {
    const button = document.querySelector(".signup-form-submit-button button");
    if (button != null) {
      button.disabled = false;
      button.style.pointerEvents = "all";
    }
  };
  const disableButton = () => {
    const button = document.querySelector(".signup-form-submit-button button");
    if (button != null) {
      button.disabled = true;
      button.style.pointerEvents = "none";
    }
  };
  useEffect(() => {
    const inputField = document.querySelector(".signup-form-email");
    if (inputField != null) {
      if (validateEmail(inputField)) enableButton();
      else disableButton();
    }
  }, [email]);
  useEffect(() => {
    const inputField = document.querySelector(".signup-form-otp");
    if (inputField != null) {
      if (validateOtp(inputField)) enableButton();
      else disableButton();
    }
  }, [otp]);
  useEffect(() => {
    const passwordField = document.querySelector(".signup-form-password");
    const confirmPasswordField = document.querySelector(
      ".signup-form-confirm-password"
    );
    if (passwordField != null && confirmPasswordField != null) {
      if (
        validatePassword(passwordField) &&
        validateConfirmPassword(confirmPasswordField)
      )
        enableButton();
      else disableButton();
    }
  }, [password, confirmPassword]);
  const getButton = () => {
    if (!isOtpSent && !isOtpVerified) {
      return "Continue";
    } else if (isOtpSent && !isOtpVerified) {
      return "Verify";
    } else {
      return "Register";
    }
  };
  const createForm = () => {
    if (!isOtpSent && !isOtpVerified) {
      return (
        <div className='signup-form-email'>
          <Input
            inputObj={{
              id: "signup-form-email",
              type: "email",
              name: "email",
              value: email,
              placeholder: "enter your email",
              borderBottom: "0px",
              handleChange: handleOnChange,
              caretColor: "black",
              color: "black",
            }}
          />
        </div>
      );
    } else if (isOtpSent && !isOtpVerified) {
      return (
        <div className='signup-form-otp'>
          <Input
            inputObj={{
              id: "signup-form-otp",
              type: "text",
              name: "otp",
              value: otp,
              placeholder: "enter 4-digit otp",
              borderBottom: "0px",
              handleChange: handleOnChange,
              caretColor: "black",
              color: "black",
            }}
          />
        </div>
      );
    } else {
      return (
        <>
          <div className='signup-form-password'>
            <Input
              inputObj={{
                id: "signup-form-password",
                type: "password",
                name: "password",
                value: password,
                placeholder: "enter your password",
                borderBottom: "0px",
                handleChange: handleOnChange,
                caretColor: "black",
                color: "black",
              }}
            />
          </div>
          <div className='signup-form-confirm-password'>
            <Input
              inputObj={{
                id: "signup-form-confirm-password",
                type: "password",
                name: "confirmPassword",
                value: confirmPassword,
                placeholder: "confirm your password",
                borderBottom: "0px",
                handleChange: handleOnChange,
                caretColor: "black",
                color: "black",
              }}
            />
          </div>
        </>
      );
    }
  };
  return (
    <div className='signup-component'>
      <div className='signup-box'>
        <div className='signup-form-user-logo'>
          <Image
            imageObj={{
              id: "signup-form-user-logo",
              width: "50px",
              height: "50px",
              src: "https://img.icons8.com/ios-filled/2x/user-male-circle.png",
            }}
          />
        </div>
        <div className='signup-form-greet'>
          <Paragraph
            paragraphObj={{
              id: "signup-form-greet-p",
              size: "extra-extra-big",
              weight: "bold",
              content: "Create Account!",
              color: "black",
              font: "monospace",
            }}
          />
        </div>
        <div className='signup-form-box'>
          <Form formObj={{ id: "signup-form", handleSubmit: handleSubmit }}>
            {createForm()}
            <div className='signup-form-submit-button'>
              <button type='submit'>{getButton()}</button>
            </div>
          </Form>
        </div>
      </div>
      <div className='signin-form-back-button'>
        <button type='button' value='button' onClick={handleBack}>
          X
        </button>
      </div>
    </div>
  );
};

export default SignUp;
