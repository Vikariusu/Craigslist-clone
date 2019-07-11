import React from 'react';
import MainMenu from './MainMenu';
import PostList from './PostList';

class CategoryPage extends React.Component {
    render() {
        return (
            <div className="main-page__outer">
                <MainMenu />
                <div>
                    <PostList category={this.props.match.params.categoryName} />
                </div>
            </div>
        )
    }
}

export default CategoryPage;