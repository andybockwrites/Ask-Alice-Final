import React from "react";
import { useState } from "react";
import LoginModal from "./loginModal";
import Auth from "../utils/auth";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <header className="app-name uk-container-expand uk-grid">
      <div className="uk-width-1-3"></div>
      <div className="uk-width-1-3 uk-flex uk-flex-center">
        <h1 className="brown font-display-bold">Ask Alice!</h1>
      </div>
      <div className="uk-width-1-3 uk-flex uk-flex-center">
      {Auth.loggedIn() ? (
        <button onClick={() => Auth.logout()}>Log Out</button>
        ) : (
          <button onClick={() => setModalShow(true)}>Log In</button>
        )}
      </div>

      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </header>
  );
};

export default Header;
