import React from "react";
import SimpleMap from "./Map.js";
import ImageCarousel from "./ImageCarousel";
import PropTypes from "prop-types";

class PostView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      postId: this.props.match.params.id,
      data: {},
      date: null
    };
  }

  componentDidMount = () => {
    this.getPostData();
  };

  getDate = () => {
    const postDate = Date.parse(this.state.data.created_date);
    const formattedDate = new Date(postDate).toGMTString();
    this.setState({ date: formattedDate });
  };

  getPostData = () => {
    fetch(`/api/posts/${this.state.postId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
        this.getDate();
      });
  };

  render() {
    const canDeliver = this.state.data.canDeliver ? "yes" : "no";
    const condition = this.state.data.condition ? (
      <p>Condition: {this.state.data.condition}</p>
    ) : null;
    const displayCarousel =
      this.state.data.imageUrl && this.state.data.imageUrl.length > 0 ? (
        <ImageCarousel postImages={this.state.data.imageUrl} />
      ) : null;
    const displayMap = this.state.data.neighborhood ? (
      <SimpleMap center={this.state.data.neighborhood.coordinates} zoom={13} />
    ) : null;
    const emailSeller = this.state.data.email ? (
      <button className="btn-primary">
        <a href={`mailto:${this.state.data.email}`}>Reply to the seller</a>
      </button>
    ) : null;
    const emailInfo = this.state.data.email ? (
      <p>Email: {this.state.data.email}</p>
    ) : null;

    return (
      <div className="">
        <div className="">
          <div className="post-view">
            <div className="post-view post-view__main">
              <h1 className="post-view__main-title">
                {this.state.data.title}
                <span>
                  <i className={"fa fa-heart"} />
                </span>
              </h1>
              {emailSeller}
              {displayCarousel}
              <h2 className="secondary--heading">Description</h2>
              <p>{this.state.data.description}</p>
              <div className="post-details">
                <p>Posted: {this.state.date}</p>
                <p>Post id: {this.state.data._id}</p>
              </div>
            </div>
            <div className="post-view post-view__side-info">
              {displayMap}
              <div className="post-view__product-details">
                {condition}
                <p>Delivery possible: {canDeliver}</p>
                {emailInfo}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostView.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object
};

export default PostView;
