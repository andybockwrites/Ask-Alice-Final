import React from "react";
import { useState } from "react";
import LoginForm from "./loginForm";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <header className="app-name uk-container-expand uk-grid">
      <div className="uk-width-1-3"></div>
      <div className="uk-width-1-3 uk-flex uk-flex-center">
        <h1 className="brown font-display-bold">Ask Alice!</h1>
      </div>
      <div className="uk-width-1-3 uk-flex uk-flex-center">
        <button onClick={handleShow}>Log In</button>
      </div>
      <LoginForm showing={show}/>
    </header>
  );
};

export default Header;
