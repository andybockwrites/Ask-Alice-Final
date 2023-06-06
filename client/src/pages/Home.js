import React from "react";
import Nav from "../components/nav";
import bunny from "../assets/bunny.jpg";

const Home = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <Nav />
      <div className="body-element">
        <div className="instructions">
          <h3 className="brown font-display">
            A search engine for recalled prescription drugs.
          </h3>
          <h5 className="brown font-display-bold">
            To go down the Rabbit Hole, scroll down and select two dates below!
          </h5>
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
          
            a
            href="#searchResults"
            onclick={() => {
              handlePageChange("searchResults");
            }}
            className={
              currentPage === "searchResults" ? "search uk-link brown font-display nav-link active" : "search uk-link brown font-display nav-link"
            }
          >
            Recall Rabit Hole
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;