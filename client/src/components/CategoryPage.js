import React from 'react';
import MainMenu from './MainMenu';
import PostList from './PostList';
import { timingSafeEqual } from 'crypto';

class CategoryPage extends React.Component {
    render() {
        return (
            <div className="main-page__outer">
                <MainMenu />
                <PostList category={this.props.match.params.categoryName} />
            </div>
        )
    }
}

export default CategoryPage;