import React from "react";
import bunny from "../assets/bunny.jpg";

const Footer = () => {
  return (
    <footer className="uk-flex-inline">
      <div className="footer-text ">
          <h6 className=" brown uk-text-small uk-text-lighter">The Rabbit says:</h6>
          <h5 className="brown uk-text-large">"There are <span id="count2"></span> recalls in this rabbit hole!"</h5>
          <h3 className="brown uk-text-large uk-text-bold">What do you want to do now?</h3>
      </div>
      <img src={bunny}alt="white rabbit" className="rabbit-2"/>
    </footer>
  );
};

export default Footer;
