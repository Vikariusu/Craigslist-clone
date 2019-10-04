import React from "react";
import PropTypes from "prop-types";
import MainMenu from "./MainMenu";
import PostList from "./PostList";

class CategoryPage extends React.Component {
    render() {
        return (
            <div className="main-page__outer">
                <MainMenu page="category" />
                <div>
                    <PostList category={this.props.match.params.categoryName} pageName="category-page" />
                </div>
            </div>
        );
    }
}

CategoryPage.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object.isRequired
};

export default CategoryPage;
