import React from 'react';
import PropTypes from 'prop-types'; 
import PostList from './PostList';

class LikedPosts extends React.Component {
    render() {
        return (
            <div className="liked-posts">
                <h2>Loves</h2>
                <p>Make it easy to find your favorite offers. Remember - once they're gone, they're gone!</p>
                <PostList showLikes={true} pageName='likedPostsPage' />
            </div>
        )
    }
}

LikedPosts.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    match: PropTypes.object
}

export default LikedPosts;