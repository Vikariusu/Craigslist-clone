import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

class PostCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: this.props[0].imageUrl.length ? this.props[0].imageUrl[0] : logo
        };
    }

    handleLike = (event) => {
        event.preventDefault();
        this.props.togglePostLike(this.props[0]._id);
    }

    render() {
        const displayPrice = this.props[0].price ? `$${this.props[0].price}` : '$0';

        return (
            <div className="post-card">
                <Link to={'posts/' + this.props[0]._id} key={this.props[0]._id}>
                    <img src={this.state.image} alt=''/>
                    <div className="post-card-infos">
                        <h2>{this.props[0].title}</h2>
                        <div className="post-card-infos--secondary">
                            <p>{this.props[0].location}</p>
                            <p className="post-card-pricing">{displayPrice}</p>
                        </div>
                    </div>
                    <i onClick={this.handleLike} className={"fa fa-heart" + (this.props.liked ? '' : '-o')} />
                </Link>
            </div>
        )
    }
}

export default PostCard;