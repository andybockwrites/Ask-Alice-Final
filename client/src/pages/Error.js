import React from 'react';

function Error({ currentPage, handlePageChange}) {
    return (
        <div class="body-container">
            <div class="sorry">
                <h4 class="sorry-text brown font-display-bold">Sorry, there are no drug recalls within that range of dates.</h4>
            </div>
            <div class="quote">
                <h6  class="brown font-display-bold">"I don’t see how he can ever finish, if he doesn’t begin." - Alice</h6>
            </div>
            <div class ="nav-container">
                <button class="uk-link back-button"><a href="./index.html">Back to Search Dates</a></button>
                <button id ="continuebtn" class="uk-link">Continue Down the Rabbit Hole!</button>
            </div>
        </div>
    )
}