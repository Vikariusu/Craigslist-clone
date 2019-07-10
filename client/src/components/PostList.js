import React from 'react';
import PostCard from './PostCard';
import { Link } from 'react-router-dom'

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            data: []
        };
    }

    componentDidMount() {
        this.fetchPosts(this.props);
    }

    fetchPosts({loadRecent, category}) {
        let queryURL = 'http://localhost:3000/api/posts/'
        let params = "";
        if (loadRecent) {
            params += 'loadrecent=8';
        }

        if (category) {
            params += `category=${category}`;
        }

        fetch(`${queryURL}?${params}`)
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
        return(
            <div className="cards__outer">
                <div className="cards">
                    {this.renderPosts()}
                </div>
            </div>
        )
    }
}

export default PostList;