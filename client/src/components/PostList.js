import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            data: [],
            pageName: this.props.pageName || '',
            likedPosts: {},
            sortedBy: 'newest'
        };
    }

    componentDidMount = async () => {
        await this.getLikes();
        this.fetchPosts(this.props);
    }

    componentDidUpdate(prevProps) {
        // check if category changed
        if (this.props.category !== prevProps.category) {
            this.fetchPosts(this.props);
        }
    }

    // parses ISO Date to Date format
    parseISOString = (s) => {
        var b = s.split(/\D+/);
        return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
    }

    // TODO: refactor
    handleSort = (event) => {
        let posts = this.state.data;

        if (event.target.value === 'lowest') {
            // lowest price first
            posts.sort((a, b) => (a.price > b.price) ? 1 : -1);
        } else if (event.target.value === 'highest') {
            // highest price first
            posts.sort((a, b) => (a.price < b.price) ? 1 : -1);
        } else {
            // newest items first
            posts.sort((a, b) => {
                return this.parseISOString(b.created_date) - this.parseISOString(a.created_date)
            })
        }

        this.setState({ ...this.state, data: posts, sortedBy: event.target.value });
    }


    getLikes = async () => {
        const likedPosts = JSON.parse(localStorage.getItem("likedPosts"));
        await this.setState({ likedPosts: likedPosts ? likedPosts : {} });
    }

    setLikes(likedPosts) {
        localStorage.setItem("likedPosts", JSON.stringify(likedPosts))
    }

    togglePostLike = (postId) => {
        const likedPosts = { ...this.state.likedPosts }
        if (likedPosts[postId]) {
            delete likedPosts[postId]
        } else {
            likedPosts[postId] = true;
        }

        this.setLikes(likedPosts);
        this.setState({ likedPosts });
    }

    fetchPosts({ loadRecent, category, showLikes }) {
        let queryURL = '/api/posts/'
        let params = "";

        // load the last 8 listing for the main page
        if (loadRecent) {
            params += 'loadrecent=8';
        }

        if (category) {
            params += `category=${category}`;
        }

        // load liked posts for 'likes' page
        if (showLikes) {
            params += `postIds=${Object.keys(this.state.likedPosts).join(',')}`
        }

        fetch(`${queryURL}?${params}`)
            .then(response => response.json())
            .then(data => this.setState({ data }))
    }

    renderPosts = () => {
        // check if 'likes' object is empty for likedPosts page
        if (this.state.pageName === 'likedPostsPage') {
            if (Object.keys(this.state.likedPosts).length === 0 && this.state.likedPosts.constructor === Object) {
                return (
                    <div className="liked-posts-empty">
                        <p>Ooops, you haven't liked any posts yet! <Link to={'/'} className="link-secondary">Explore recent posts.</Link></p>
                    </div>
                )
            }
        }

        return this.state.data.map((post) => {
            const liked = this.state.likedPosts[post._id]
            return (
                <PostCard key={post._id} {...post} liked={liked} togglePostLike={this.togglePostLike} />
            );
        });
    }

    render() {
        const caption = this.props.loadRecent ? 'Recently posted items' : this.props.category;

        return (
            <div className="cards__outer">
                <div className="cards__outer__sort">
                    <p className="cards__outer__caption">{caption}</p>
                    {this.state.pageName !== 'likedPostsPage' ?
                        <div>
                            <span className="text-medium">Sort by:</span>
                            <select value={this.state.sortedBy} onChange={this.handleSort} className="dropdown-main">
                                <option value="newest">Newest</option>
                                <option value="lowest">Lowest price</option>
                                <option value="highest">Highest price</option>
                            </select>
                        </div> : null
                    }
                </div>
                <div className="cards">
                    {this.renderPosts()}
                </div>
            </div >
        )
    }
}

PostList.propTypes = {
    loadRecent: PropTypes.string,
    pageName: PropTypes.string,
    liked: PropTypes.bool
}

export default PostList;