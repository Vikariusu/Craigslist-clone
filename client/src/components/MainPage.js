import React from 'react';
import MainMenu from './MainMenu';
import PostList from './PostList';

const MainPage = () => {
    return (
        <div className="main-page__outer">
            <MainMenu />
            <PostList loadRecent="true" />
        </div>
    )
}

export default MainPage;