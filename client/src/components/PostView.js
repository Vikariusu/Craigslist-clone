import React from 'react';
import SimpleMap from './Map.js';
import ImageCarousel from './ImageCarousel';
import PropTypes from 'prop-types'; 

class PostView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.match.params.id,
            data: {},
            date: null
        }
    }

    componentDidMount = () => {
        this.getPostData();
    }

    getDate = () => {
        const postDate = Date.parse(this.state.data.created_date);
        const formattedDate = new Date(postDate).toString();
        this.setState({ date: formattedDate });
    }

    getPostData = () => {
        fetch(`http://localhost:3000/api/posts/${this.state.postId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
                this.getDate();
            })
    }

    render() {
        const canDeliver = this.state.data.canDeliver ? 'yes' : 'no';
        const condition = this.state.data.condition ? <p>Condition: {this.state.data.condition}</p> : null;
        const displayCarousel = this.state.data.imageUrl && this.state.data.imageUrl.length > 0 ? <ImageCarousel postImages={this.state.data.imageUrl} /> : null;

        return (
            <div className="">
                <div className="">
                    <div className="post-view">
                        <div className="post-view post-view__main">
                            <h1 className="post-view__main-title">{this.state.data.title}</h1>
                            <button className="btn-primary">Reply to the seller</button>
                            {displayCarousel}
                            <h2 className="secondary--heading">Description</h2>
                            <p>{this.state.data.description}</p>
                            <div className="post-details">
                                <p>Posted: {this.state.date}</p>
                                <p>Post id: {this.state.data._id}</p>
                            </div>
                        </div>
                        <div className="post-view post-view__side-info">
                            <SimpleMap center={{ lat: 40.6711, lng: -73.9814 }} zoom={13} />
                            <div className="post-view__product-details">
                                {condition}
                                <p>Delivery possible: {canDeliver}</p>
                                <p>Email: realemail@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PostView.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    match: PropTypes.object
}

export default PostView;