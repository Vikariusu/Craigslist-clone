import React from 'react';
import PostCard from './PostCard';
import { Link } from 'react-router-dom'

class RecentPostsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            data: []
        };

        fetch('http://localhost:3000/api/posts/recent/8')
            .then(response => response.json())
            .then(data => this.setState({ data }))
    }

    renderPosts = () => {
        return this.state.data.map((post) => {
            return (
                <Link to={'posts/' + post._id}>
                    <PostCard key={post._id} {...[post]} />
                </Link>
            );
        });
    }

    render() {
        return (
            <div className="recent-posts-list">
                <div className="recent-posts-list__caption">Recently posted</div>
                <div className="cards__outer">
                    <div className="cards">
                        {this.renderPosts()}
                    </div>
                </div>
            </div>

        )
    }
}

export default RecentPostsList;