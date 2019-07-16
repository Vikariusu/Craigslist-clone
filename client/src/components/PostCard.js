import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

class PostCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: this.props.imageUrl.length ? this.props.imageUrl[0] : logo
        };
    }

    handleLike = (event) => {
        event.preventDefault();
        this.props.togglePostLike(this.props._id);
    }

    render() {
        const displayPrice = this.props.price ? `$${this.props.price}` : '$0';

        return (
            <div className="post-card">
                <Link to={'posts/' + this.props._id} key={this.props._id}>
                    <img src={this.state.image} alt=''/>
                    <div className="post-card-infos">
                        <h2>{this.props.title}</h2>
                        <div className="post-card-infos--secondary">
                            <p>{this.props.location}</p>
                            <p className="post-card-pricing">{displayPrice}</p>
                        </div>
                    </div>
                    <i onClick={this.handleLike} className={"fa fa-heart" + (this.props.liked ? '' : '-o')} />
                </Link>
            </div>
        )
    }
}

PostCard.propTypes = {
    togglePostLike: PropTypes.func,
    _id: PropTypes.string,
    canDeliver: PropTypes.bool,
    created_date: PropTypes.string,
    condition: PropTypes.string,
    imageUrl: PropTypes.array,
    location: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string
}

export default PostCard;