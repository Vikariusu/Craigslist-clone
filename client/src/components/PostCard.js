import React from 'react';

class PostCard extends React.Component {
    render() {
        return (
            <div className="post-card">
                <img src="https://www.lampsplus.com/images/landing-pages/table-lamps-n/table-lamps_traditional-0227.jpg" />
                <div className="card-trip-infos">
                    <div>
                        <h2>{this.props[0].title}</h2>
                        <p>Short description here!</p>
                    </div>
                    <h2 className="post-card-pricing">£99.99</h2>
                </div>
            </div>
        )
    }
}

export default PostCard;