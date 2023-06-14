import React, { useState, useEffect, useLayoutEffect } from 'react';
import bunny from "../assets/bunny.jpg";
import Auth from '../utils/auth';
import { useMutation, useLazyQuery } from "@apollo/client";
import { ADD_CARROT } from '../utils/mutations';
import { REMOVE_CARROT } from '../utils/mutations';
import { QUERY_CARROTS_BY_DRUGNAME } from '../utils/queries';

const Footer = ({ resultsAmount, resultName, resultParent }) => {
  const [addCarrot, {error}] = useMutation(ADD_CARROT);
  const [removeCarrot, {error: removeError}] = useMutation(REMOVE_CARROT);
  const [isHovered, setIsHovered] = useState(false);
  const [carrotData, setCarrotData] = useState({
    drugName: resultName,
    parentCompany: resultParent,
  });
  
  const testFunction = async (data) => {
    console.log('got data');
    console.log(data);

    if(!data.carrotsByDrugName){
      try {
        console.log('trying to add carrot')
        const { data } = await addCarrot({
          variables: { ...carrotData, userId: Auth.getProfile().data._id },
        });
        console.log(data);
      } catch (e) {
        console.error(e);
      } 
    }

    else{
      console.log('carrot already exists');
    }
  } 

  const [getCarrot, { loading, data}] = useLazyQuery(QUERY_CARROTS_BY_DRUGNAME, {variables: {drugName: resultName}, fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    setCarrotData({ drugName: resultName, parentCompany: resultParent });
    console.log(carrotData);
  }, [resultName, resultParent]);

  useLayoutEffect(() => {
    console.log(carrotData);
  }, [carrotData]);
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

  const handleBunnyClick = async () => {
    if(!Auth.loggedIn()){
      console.log("not logged in.")
      return;
    }
    console.log(Auth.getProfile().data._id);

    console.log(resultName);
    getCarrot({variables: {drugName: resultName}, fetchPolicy: 'cache-and-network', onCompleted: (data) => testFunction(data)});

    /* console.log(loading)
    console.log(data) */

    
    };

    if(loading){
      return <h1>Loading...</h1>
    }
  // Save the new carrot to the backend
  // Handle the success or error response accordingly
  // };
  return (
    <footer className="uk-flex-inline uk-margin-large-left uk-margin-large-right uk-margin-bottom">
      <div className="footer-text uk-text-center">
        <h6 className=" brown uk-text-small uk-text-lighter">The Rabbit says:</h6>
        <h5 className="brown uk-text-large">"There are <span id="count2">{resultsAmount}</span> recalls in this rabbit hole!"</h5>
        <h3 className="brown uk-text-large uk-text-bold">What do you want to do now?</h3>
        <blockquote>Click the bunny to feed it a carrot! Cross your fingers first, though. One can never be too sure...</blockquote>
      </div>
      <img
        src={bunny}
        alt="White Rabbit"
        className="rabbit-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleBunnyClick}
        style={cursorStyle}
      />
    </footer>
  );
};

export default Footer;
