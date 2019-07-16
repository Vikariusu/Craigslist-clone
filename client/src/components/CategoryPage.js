import React from 'react';
import MainMenu from './MainMenu';
import PostList from './PostList';
import PropTypes from 'prop-types'; 

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

CategoryPage.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object.isRequired
}


export default CategoryPage;