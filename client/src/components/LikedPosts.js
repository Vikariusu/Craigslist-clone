import React from 'react';
import PostList from './PostList';

class LikedPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likedPosts: JSON.parse(localStorage.getItem("likedPosts"))
        }
    }

    render() {
        return (
            <div className="liked-posts">
                <PostList showLikes={true} />
            </div>
        )
    }
}

export default LikedPosts;