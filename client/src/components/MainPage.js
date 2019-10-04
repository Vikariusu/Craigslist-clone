import React from 'react';
import PropTypes from 'prop-types';
import MainMenu from './MainMenu';
import PostList from './PostList';

const MainPage = () => {
    return (
        <div className="main-page__outer">
            <MainMenu />
            <PostList loadRecent="true" pageName='mainPage' />
        </div>
    )
}

MainPage.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    match: PropTypes.object
}

export default MainPage;