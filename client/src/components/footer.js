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
  const [carrotCount, setCarrotCount] = useState(0);
  const [carrotData, setCarrotData] = useState({
    drugName: resultName,
    parentCompany: resultParent,
  });

  const [getCarrot, { loading, data}] = useLazyQuery(QUERY_CARROTS_BY_DRUGNAME, {variables: {drugName: resultName}, fetchPolicy: 'network-only'});

  const getCarrotCount = (data) => {
    console.log('got carrot count');
    if(!data.carrotsByDrugName){
      console.log('no carrots');
      setCarrotCount(0);
    } else {
      setCarrotCount(data.carrotsByDrugName.carrots.length);
    }
  }
  
  const addRemoveCarrot = async (data) => {
    console.log('got data');
    console.log(data);

    const carrot = data.carrotsByDrugName;

    if(!carrot){
      try {
        console.log('trying to add carrot')
        const { data } = await addCarrot({
          variables: { ...carrotData, userId: Auth.getProfile().data._id },
        });
        console.log(data);
        setCarrotCount(carrotCount + 1)
        return;
      } catch (e) {
        console.error(e);
        return;
      } 
    } else{
      console.log('carrot already exists');
      console.log(carrot);

      for(let i of carrot.carrots){
        if(i._id === Auth.getProfile().data._id){
          console.log('removing carrot');
          try {
            console.log(carrot._id);
            const data = await removeCarrot({ variables: {carrotId: carrot._id}});
            console.log(data);
            setCarrotCount(carrotCount - 1)
          } catch (e) {
            console.error(e);
          } 
          return;
        }
      }

      try {
        console.log('trying to add carrot')
        const { data } = await addCarrot({
          variables: { ...carrotData, userId: Auth.getProfile().data._id },
        });
        console.log(data);
        setCarrotCount(carrotCount + 1)
      } catch (e) {
        console.error(e);
      } 

    }
  } 

  useEffect(() => {
    setCarrotData({ drugName: resultName, parentCompany: resultParent });
    console.log(carrotData);
    getCarrot({variables: {drugName: resultName}, fetchPolicy: 'network-only', onCompleted: (data) => getCarrotCount(data)});
  }, [resultName, resultParent]);

  useLayoutEffect(() => {
    console.log(carrotData);
  }, [carrotData]);

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
    await getCarrot({variables: {drugName: resultName}, fetchPolicy: 'network-only', onCompleted: (data) => addRemoveCarrot(data)});

    };
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
        <p>The bunny has been given <strong>{loading ? '...':carrotCount} 🥕</strong> for this recall</p>
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
