import React from 'react';

function Error({ currentPage, handlePageChange}) {
    return (
        <div className="body-container">
            <div className="sorry">
                <h4 className="sorry-text brown font-display-bold">Sorry, there are no drug recalls within that range of dates.</h4>
            </div>
            <div className="quote">
                <h6  className="brown font-display-bold">"I don’t see how he can ever finish, if he doesn’t begin." - Alice</h6>
            </div>
            <div className ="nav-container">
                <button className="uk-link back-button"><a href="./index.html">Back to Search Dates</a></button>
                <button id ="continuebtn" className="uk-link">Continue Down the Rabbit Hole!</button>
            </div>
        </div>
    )
}