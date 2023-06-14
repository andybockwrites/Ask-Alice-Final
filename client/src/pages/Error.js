import React from 'react';

function Error({ currentPage, handlePageChange }) {
    return (
        <div className="body-container uk-flex uk-flex-column uk-flex-middle uk-margin-large-top">
            <h1 className='uk-margin-small-bottom'>404: Page not found</h1>
            <blockquote>"I don’t see how he can ever finish, if he doesn’t begin." - Alice</blockquote>
        </div>
    )
}

export default Error;