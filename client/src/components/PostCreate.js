import React from "react";
import ImageUploader from "./imageUploader/ImageUploader";
import Alert from "./_alert";

const initialErrors = {
  categoryError: "",
  titleError: "",
  priceError: "",
  conditionError: "",
  emailError: "",
  descriptionError: "",
  locationError: ""
};

class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: null,
      newPost: {
        category: "",
        title: "",
        price: "",
        condition: "",
        email: "",
        description: "",
        delivery: false,
        location: "",
        imageUrl: []
      },
      errorMessages: initialErrors
    };
  }

  handleChange = event => {
    const label = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    event.persist();
    this.setState(prevState => ({
      newPost: {
        ...prevState.newPost,
        [label]: value
      }
    }));
  };

  validateForm = event => {
    const inputValues = { ...this.state.newPost };

    if (!inputValues.title) {
      this.setState({
        errorMessages: {
          ...this.state.errorMessages,
          titleError: "Title cannot be empty"
        }
      });
    }
    return false;
  };

  validateForm = () => {
    const inputValues = { ...this.state.newPost };

    let categoryError,
      titleError,
      priceError,
      conditionError,
      emailError,
      descriptionError,
      locationError;

    if (!inputValues.title) {
      titleError = "title cannot be blank";
    }
    if (!inputValues.location) {
      locationError = "location cannot be blank";
    }
    if (!inputValues.category) {
      categoryError = "category cannot be blank";
    }
    if (!inputValues.condition) {
      conditionError = "condition cannot be blank";
    }
    if (!inputValues.description) {
      descriptionError = "description cannot be blank";
    }
    if (inputValues.email && !inputValues.email.includes("@")) {
      emailError = "email is incorrect";
    }

    this.setState({
      errorMessages: {
        ...this.state.errorMessages,
        categoryError,
        titleError,
        priceError,
        conditionError,
        emailError,
        descriptionError,
        locationError
      }
    });

    // check if there are errors
    if (
      categoryError ||
      titleError ||
      priceError ||
      conditionError ||
      emailError ||
      descriptionError ||
      locationError
    ) {
      return false;
    }

    return true;
  };

  handleSubmit = async event => {
    event.preventDefault();

    // clear up any errors
    this.setState({ errorMessages: initialErrors });
    this.setState({ isFormValid: null });

    let queryURL = "/api/posts/";
    let data = this.state.newPost;

    const isValid = this.validateForm();

    if (!isValid) {
      this.setState({ isFormValid: false });
      return;
    }

    try {
      const response = await fetch(queryURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...data })
      });

      const json = await response.json();

      console.log(json);
      this.props.history.push(`/posts/${json._id}`);
    } catch (e) {
      // TODO add state key for submission failure
      this.setState({ isFormValid: false });
    }
  };

  handleImageUpdate = images => {
    this.setState({ newPost: { ...this.state.newPost, imageUrl: images } });
  };

  render() {
    return (
      <div className="content-inner">
        {this.state.isFormValid === false ? <Alert /> : null}
        <div className="post-create__outer">
          <div className="post-create__side-information">
            <p className="side-text">
              Fields marked with <span className="field-required">*</span>{" "}
              symbol are required.
            </p>
            <p>
              Your listing will show the approximate radius of the neighborhood
              you select.
            </p>
            <p>
              Avoid scams. Deal locally and meet in person. Beware shipping,
              wire transfers, cashier checks.
            </p>
          </div>
          <div className="post-create__inner">
            <form onSubmit={this.handleSubmit}>
              <div className="horizontal-field">
                <label>
                  <p>
                    Category <span className="field-required">*</span>
                  </p>
                  <select
                    value={this.state.newPost.category}
                    onChange={this.handleChange}
                    className="post-create__select"
                    name="category"
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="antiques">antiques</option>
                    <option value="appliances">appliances</option>
                    <option value="furniture">furniture</option>
                    <option value="garden">garden</option>
                    <option value="household">household</option>
                    <option value="jewelry">jewelry</option>
                  </select>
                  <p className="error-message">
                    {this.state.errorMessages.categoryError}
                  </p>
                </label>
              </div>
              <div className="horizontal-field">
                <label className="field-right">
                  <p>
                    Condition <span className="field-required">*</span>
                  </p>
                  <select
                    value={this.state.newPost.condition}
                    onChange={this.handleChange}
                    className="post-create__select"
                    name="condition"
                  >
                    <option value="" disabled>
                      Select condition
                    </option>
                    <option value="brand new">Brand new</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="salvage">Salvage</option>
                  </select>
                  <p className="error-message">
                    {this.state.errorMessages.conditionError}
                  </p>
                </label>
              </div>
              <label>
                <p>
                  Location <span className="field-required">*</span>
                </p>
                <select
                  value={this.state.newPost.location}
                  onChange={this.handleChange}
                  className="post-create__select"
                  name="location"
                >
                  <option value="" disabled>
                    Select neighborhood
                  </option>
                  <option value="Clinton Hill">Clinton Hill</option>
                  <option value="Downtown Brooklyn">Downtown Brooklyn</option>
                  <option value="East Village">East Village</option>
                  <option value="Greenpoint">Greenpoint</option>
                  <option value="Park Slope">Park Slope</option>
                </select>
                <p className="error-message">
                  {this.state.errorMessages.locationError}
                </p>
              </label>
              <div className="horizontal-field">
                <label>
                  <p>
                    Title <span className="field-required">*</span>
                  </p>
                  <input
                    type="text"
                    value={this.state.newPost.title}
                    onChange={this.handleChange}
                    name="title"
                  />
                  <p className="error-message">
                    {this.state.errorMessages.titleError}
                  </p>
                </label>
              </div>
              <div className="horizontal-field">
                <label className="field-right">
                  <p>Price</p>
                  <input
                    type="text"
                    value={this.state.newPost.price}
                    onChange={this.handleChange}
                    name="price"
                  />
                </label>
              </div>
              <label>
                <p>Email</p>
                <input
                  type="text"
                  value={this.state.newPost.email}
                  onChange={this.handleChange}
                  name="email"
                />
              </label>
              <p className="error-message">
                {this.state.errorMessages.emailError}
              </p>
              <label>
                <p>
                  Description <span className="field-required">*</span>
                </p>
                <textarea
                  type="text"
                  value={this.state.newPost.description}
                  onChange={this.handleChange}
                  name="description"
                  cols="60"
                  rows="4"
                />
                <p className="error-message">
                  {this.state.errorMessages.descriptionError}
                </p>
              </label>
              <ImageUploader
                imageUrl={this.state.newPost.imageUrl}
                updateImages={this.handleImageUpdate}
              />
              <label>
                Delivery possible
                <input
                  type="checkbox"
                  value={this.state.newPost.delivery}
                  onChange={this.handleChange}
                  name="canDeliver"
                />
              </label>
              <input
                type="submit"
                value="Submit"
                className="btn-primary-action"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCreate;
