import React from "react";
import Nav from "../components/nav";

const Home = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <Nav />
      <div class="body-element">
        <div class="instructions">
          <h3 class="brown font-display">
            A search engine for recalled prescription drugs.
          </h3>
          <h5 class="brown font-display-bold">
            To go down the Rabbit Hole, scroll down and select two dates below!
          </h5>
        </div>
        <img src="./photos/bunny.jpg" alt="picture of rabbit" class="rabbit" />
        <div class="search-container">
          <div class="calendar-container-from">
            <h5 class="brown font-display-bold">Start Date</h5>
            <input id="from"></input>
          </div>
          <h3 class="brown font-display-bold">TO</h3>
          <div class="calendar-container-to">
            <h5 class="brown font-display-bold">End Date</h5>
            <input id="to"></input>
          </div>
        </div>
        <div class="nav-buttons">
          <button
            class="search uk-link brown font-display"
            a
            href="#searchResults"
            onclick={() => {
              handlePageChange("searchResults");
            }}
            className={
              currentPage === "searchResults" ? "nav-link active" : "nav-link"
            }
          >
            Recall Rabit Hole
          </button>
        </div>
      </div>
    </div>
  );
};
