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
        return (
            <div className="post-card">
                <img src={this.state.image} />
                <div className="post-card-infos">
                    <div>
                        <h2>{this.props[0].title}</h2>
                        <p>{this.props[0].location}</p>
                    </div>
                    <h2 className="post-card-pricing">{this.props[0].price}</h2>
                </div>
            </div>
        )
    }
}

export default PostCard;