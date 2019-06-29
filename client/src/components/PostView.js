import React from 'react';
import SimpleMap from './Map.js';

class PostView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.match.params.id,
            data: {}
        }
    }

    componentDidMount = () => {
        this.getPostData();
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
                            <img src="https://images.crateandbarrel.com/is/image/Crate/IconBlackWallFrameGroupFHS19"/>
                            {/* <p>{this.data.location}</p> */}
                            <p>{this.state.data.description} </p>
                        </div>
                        <div className="post-view post-view__side-info">
                            <SimpleMap center={{ lat: 40.6711, lng: -73.9814 }} zoom={13} />
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