import React, { useState } from "react";
import bunny from "../assets/bunny.jpg";

const Home = ({ currentPage, handlePageChange }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSearchClicked = (event) => {
    const start = document.getElementById("from").value;
    const end = document.getElementById("to").value;
    setStartDate(start);
    setEndDate(end);

    console.log(startDate, endDate);
  }

  return (
    <div>
      <div className="body-element">
        <div className="instructions">
          <h3 className="brown font-display">
            A Recall Rabbit Hole For Pharmaceuticals
          </h3>
          <h5 className="brown font-display-bold">
            To go down the Rabbit Hole, scroll down and select two dates below!
          </h5>
          <h6>The White Rabbit will show you the prescription drugs that have been recalled within that range.</h6>
        </div>
        <img src={bunny} alt="a white rabbit" className="rabbit" />
        <div className="search-container">
          <div className="calendar-container-from">
            <h5 className="brown font-display-bold">Start Date</h5>
            <input id="from"></input>
          </div>
          <h3 className="brown font-display-bold">TO</h3>
          <div className="calendar-container-to">
            <h5 className="brown font-display-bold">End Date</h5>
            <input id="to"></input>
          </div>
        </div>
        <div className="nav-buttons">
          <button
            className="search uk-link brown font-display nav-link"
            href="#searchResults"
            onClick={() => {
              handleSearchClicked();
            }}
          >
            Recall Rabit Hole
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;