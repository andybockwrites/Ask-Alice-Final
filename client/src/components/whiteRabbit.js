import React, { useState, useEffect } from 'react';

const ImageField = ({ userId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [carrotData, setCarrotData] = useState({
    drugName: '', 
    parentCompany: '',
  });

  useEffect(() => {
    // Fetch the data from the API || Handle the success response and update the carrotData state with the received data

    
    const apiResponse = {
      drugName: '', // dynamically generate with api response
      parentCompany: '', // dynamically generate with api response
    };

    setCarrotData(apiResponse);
  }, [userId]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cursorStyle = isHovered ? { cursor: 'url(https://cur.cursors-4u.net/food/foo-5/foo429.cur), auto' } : {};

  const handleBunnyClick = () => {
    const newCarrot = {
      drugName: carrotData.drugName,
      parentCompany: carrotData.parentCompany,
      user_id: userId,
    };

    // Save the new carrot to the backend
    // Handle the success or error response accordingly
  };

  return (
    <div>
      <img
        src="client/src/assets/bunny.jpg" 
        alt="White Rabbit"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleBunnyClick}
        style={cursorStyle}
      />
      <p>Click the bunny to feed him the carrot! Cross your fingers first though, one can never be too sure.</p> 
    </div>
  );
};

export default ImageField;
