import React from 'react';
import PostCard from './PostCard';
import PropTypes from 'prop-types'; 

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            data: [],
            pageType: '',
            likedPosts: {}
        };
    }

    componentDidMount = async () => {
        await this.getLikes();
        this.fetchPosts(this.props);
    }

    getLikes = async () => {
        const likedPosts = JSON.parse(localStorage.getItem("likedPosts"));
        await this.setState({ likedPosts: likedPosts ? likedPosts : {} });
    }

    setLikes(likedPosts) {
        localStorage.setItem("likedPosts", JSON.stringify(likedPosts))
    }

    togglePostLike = (postId) => {
        const likedPosts = {...this.state.likedPosts}
        if (likedPosts[postId]) {
            delete likedPosts[postId]
        } else {
            likedPosts[postId] = true;
        }

        this.setLikes(likedPosts);
        this.setState({ likedPosts });
    }

    fetchPosts({loadRecent, category, showLikes}) {
        let queryURL = 'http://localhost:3000/api/posts/'
        let params = "";

        if (loadRecent) {
            params += 'loadrecent=8';
        }

        if (category) {
            params += `category=${category}`;
        }

        if (showLikes) {
            params += `postIds=${Object.keys(this.state.likedPosts).join(',')}`
        }

        fetch(`${queryURL}?${params}`)
            .then(response => response.json())
            .then(data => this.setState({ data }))
    }

    renderPosts = () => {
        return this.state.data.map((post) => {
            const liked = this.state.likedPosts[post._id]
            return (
                <PostCard key={post._id} {...post} liked={liked} togglePostLike={this.togglePostLike} />
            );
        });
    }

    render() {
        const caption = this.props.loadRecent ? 'Recently posted items' : this.props.category;

        return(
            <div className="cards__outer">
                <p className="cards__outer__caption">{caption}</p>
                <div className="cards">
                    {this.renderPosts()}
                </div>
            </div>
        )
    }
}

PostList.propTypes = {
    loadRecent: PropTypes.string,
    liked: PropTypes.bool
}

export default PostList;