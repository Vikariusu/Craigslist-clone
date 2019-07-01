import React from 'react';
import SimpleMap from './Map.js';

class PostView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.match.params.id,
            data: {},
            date: []
        }
    }

    componentDidMount = () => {
        this.getPostData();

        this.getDate();
    }

    getDate = () => {
        const postDate = Date.parse(this.state.data.created_date);
        const formattedDate = new Date(postDate);
        this.setState({ date: formattedDate });
    }

    getPostData = () => {
        fetch(`http://localhost:3000/api/posts/${this.state.postId}`)
            .then(response => response.json())
            .then(data => this.setState({ data }))
    }

    render() {


        return (
            <div className="">
                <div className="">
                    <div className="post-view">
                        <div className="post-view post-view__main">
                            <h1 className="post-view__main-title">{this.state.data.title}</h1>
                            <button className="btn-primary">Reply to the seller</button>
                            <div className="post-view__main-image">
                                <img src="https://images.crateandbarrel.com/is/image/Crate/IconBlackWallFrameGroupFHS19" />
                            </div>
                            <h2 className="secondary--heading">Description</h2>
                            <p>{this.state.data.description} </p>
                            <div className="post-details">
                                <p>Posted: {this.state.data.created_date}</p>
                                <p>Post id: {this.state.data._id}</p>
                            </div>
                        </div>
                        <div className="post-view post-view__side-info">
                            <SimpleMap center={{ lat: 40.6711, lng: -73.9814 }} zoom={13} />
                            {/* <SimpleMap center={this.state.data.location} zoom={13} /> */}
                            <div className="post-view__product-details">
                                <p>Condition: {this.state.data.condition}</p>
                                <p>Delivery: no</p>
                                <p>Email: realemail@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostView;