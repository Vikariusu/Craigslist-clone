import React from 'react';

class PostCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inFavorites: false,
            image: this.props[0].imageUrl ? this.props[0].imageUrl : 'https://www.lampsplus.com/images/landing-pages/table-lamps-n/table-lamps_traditional-0227.jpg'
        };
    }

    render() {
        const displayPrice = this.props[0].price ? `$${this.props[0].price}` : '$0';

        return (
            <div className="post-card">
                <img src={this.state.image} />
                <div className="post-card-infos">
                    <div>
                        <h2>{this.props[0].title}</h2>
                        <p>{this.props[0].location}</p>
                    </div>
                    <p className="post-card-pricing">{displayPrice}</p>
                </div>
            </div>
        )
    }
}

export default PostCard;