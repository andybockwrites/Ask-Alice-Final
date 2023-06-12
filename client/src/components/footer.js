import React, { useState, useEffect } from 'react';
import bunny from "../assets/bunny.jpg";
import WhiteRabbit from "./whiteRabbit";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [carrotData, setCarrotData] = useState({
    drugName: '',
    parentCompany: '',
  });

  /* useEffect(() => {
    // Fetch the data from the API || Handle the success response and update the carrotData state with the received data

    
    const apiResponse = {
      drugName: '', // dynamically generate with api response
      parentCompany: '', // dynamically generate with api response
    };

    setCarrotData(apiResponse);
  }); */

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cursorStyle = isHovered ? { cursor: 'url(https://cur.cursors-4u.net/food/foo-5/foo429.cur), auto' } : {};

  /* const handleBunnyClick = () => {
    const newCarrot = {
      drugName: carrotData.drugName,
      parentCompany: carrotData.parentCompany,
      user_id: userId,
    }; */

  // Save the new carrot to the backend
  // Handle the success or error response accordingly
  // };
  return (
    <footer className="uk-flex-inline uk-margin-large-left uk-margin-large-right uk-margin-bottom">
      <div className="footer-text uk-text-center">
        <h6 className=" brown uk-text-small uk-text-lighter">The Rabbit says:</h6>
        <h5 className="brown uk-text-large">"There are <span id="count2"></span> recalls in this rabbit hole!"</h5>
        <h3 className="brown uk-text-large uk-text-bold">What do you want to do now?</h3>
        <blockquote>Click the bunny to feed it a carrot! Cross your fingers first, though. One can never be too sure...</blockquote>
      </div>
        <img
          src={bunny}
          alt="White Rabbit"
          className="rabbit-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          // onClick={handleBunnyClick}
          style={cursorStyle}
        />
    </footer>
  );
};

export default Footer;
