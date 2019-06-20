import React from 'react';
import PostCard from './PostCard';

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            isLoading: false,
            data: []
        };

        fetch('http://localhost:3000/api/posts')
        .then(response => response.json())
        .then(data => this.setState({ data }))
    }

    renderPosts = () => {
        return this.state.data.map((post) => {
            return (
                <PostCard key={post._id} {...[post]}/>
            );
        });
    }

    render() {
        return(
            <div className="cards">
                {this.renderPosts()}
            </div>

        )
    }
}

export default PostList;