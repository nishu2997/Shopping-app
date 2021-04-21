import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import List from "../List/List";
import UnorderedList from "../UnorderedList/UnorderedList";
import Input from "../Input/Input";
import "./SignIn.css";
import Paragraph from "../Paragraph/Paragraph";
import Image from "../Image/Image";
import HyperLink from "../HyperLink/HyperLink";
import { useHistory, useLocation } from "react-router";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogInFailed, setIsLogInFailed] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
    }
  };
  const handleSubmit = (e) => {
    console.log("hii");
    e.preventDefault();
    setIsLogInFailed(true);
  };
  const handleBack = () => {
    history.push(
      location.pathname.slice(0, location.pathname.indexOf("/signin"))
    );
  };
  const enableButton = () => {
    const button = document.querySelector(".signin-form-signin-button button");
    if (button != null) {
      button.disabled = false;
      button.style.pointerEvents = "all";
    }
  };
  const disableButton = () => {
    const button = document.querySelector(".signin-form-signin-button button");
    if (button != null) {
      button.disabled = true;
      button.style.pointerEvents = "none";
    }
  };
  const disableScroll = () => {
    const main = document.getElementById("body-main-tag");
    main.style.overflow = "hidden";
  };
  useEffect(() => {
    if (isLogInFailed) setIsLogInFailed(false);
  }, [username]);
  useEffect(() => {
    if (isLogInFailed) setIsLogInFailed(false);
  }, [password]);
  useEffect(() => {
    if (username.length == 0 || password.length == 0) disableButton();
    else enableButton();
  }, [username, password]);
  useEffect(() => {
    disableScroll();
  }, []);
  return (
    <div className='signin-component'>
      <div className='signin-box'>
        <div className='signin-form-user-logo'>
          <Image
            imageObj={{
              id: "signin-form-user-logo",
              width: "50px",
              height: "50px",
              src: "https://img.icons8.com/ios-filled/2x/user-male-circle.png",
            }}
          />
        </div>
        <div className='signin-form-greet'>
          <Paragraph
            paragraphObj={{
              id: "signin-form-greet-p",
              size: "extra-extra-big",
              weight: "bold",
              content: "Please SignIn!",
              color: "black",
              font: "monospace",
            }}
          />
        </div>
        <div className='signin-form-box'>
          <Form
            formObj={{
              id: "sigin-form",
              handleSubmit: handleSubmit,
            }}
          >
            {isLogInFailed ? (
              <div className='signin-failed-msg'>
                <Paragraph
                  paragraphObj={{
                    id: "signin-failed-error",
                    size: "extra-big",
                    weight: "normal",
                    content: "username or password does not exist!",
                    color: "red",
                    font: "monospace",
                  }}
                />
              </div>
            ) : null}
            <div className='signin-form-username'>
              <Input
                inputObj={{
                  id: "signin-form-username",
                  type: "text",
                  name: "username",
                  value: username,
                  placeholder: "enter your username",
                  borderBottom: "0px",
                  handleChange: handleOnChange,
                  caretColor: "black",
                  color: "black",
                }}
              />
            </div>
            <div className='signin-form-password'>
              <Input
                inputObj={{
                  id: "signin-form-password",
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
              <HyperLink
                linkObj={{
                  id: "signin-form-forgot",
                  to: "#",
                  link: "forgot?",
                  width: "fit-content",
                  align: "center",
                  color: "blue",
                  bgColor: "white",
                  padding: "0px",
                }}
              />
            </div>
            <div className='signin-form-signin-button'>
              <button type='submit'>SignIn</button>
            </div>
            <div className='signin-form-social-signin-button'>
              <button type='button'>SignIn with Facebook</button>
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

export default SignIn;
