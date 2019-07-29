import React from 'react';
import ImageUploader from './imageUploader/ImageUploader';

class PostCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            newPost: {
                category: '',
                title: '',
                price: '',
                condition: '',
                email: '',
                description: '',
                delivery: false,
                location: '',
                imageUrl: []
            }
        };
    }

    handleChange = (event) => {
        const label = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        event.persist();
        this.setState(prevState => ({ 
            newPost: {
                ...prevState.newPost,
                [label]: value
            }
        }))
    }

    handleSubmit = (event) => {
        let queryURL = 'http://localhost:7777/api/posts/';
        let data = this.state.newPost;

        fetch(queryURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...data})
        }).then(function (response) {
            return response.json();
        }).catch(function (data) {
            console.log(data);
        });
    }

    handleImageUpdate = (images) => {
        this.setState( {newPost: { ...this.state.newPost, imageUrl: images}})
    }

    render() {
        return (
            <div className="content-inner">
                <div className="post-create__outer">
                    <div className="post-create__side-information">
                        <p className="side-text">Fields marked with <span className="field-required">*</span> symbol are required.</p>
                        <p>Your listing will show the approximate radius of the neighborhood you select.</p>
                        <p>Avoid scams. Deal locally and meet in person. Beware shipping, wire transfers, cashier checks.</p>
                    </div>
                    <div className="post-create__inner">
                        <form onSubmit={this.handleSubmit}>
                            <div className="horizontal-field">
                                <label>
                                    <p>Category <span className="field-required">*</span></p>
                                    <select value={this.state.newPost.category} onChange={this.handleChange} className="post-create__select" name="category">
                                        <option value="" disabled>Select category</option>
                                        <option value="antiques">antiques</option>
                                        <option value="appliances">appliances</option>
                                        <option value="furniture">furniture</option>
                                        <option value="garden">garden</option>
                                        <option value="household">household</option>
                                        <option value="jewelry">jewelry</option>
                                    </select>
                                </label>
                            </div>
                            <div className="horizontal-field">
                                <label className="field-right">
                                    <p>Condition <span className="field-required">*</span></p>
                                    <select value={this.state.newPost.condition} onChange={this.handleChange} className="post-create__select" name="condition">
                                        <option value="" disabled>Select condition</option>
                                        <option value="brand new">Brand new</option>
                                        <option value="excellent">Excellent</option>
                                        <option value="good">Good</option>
                                        <option value="fair">Fair</option>
                                        <option value="salvage">Salvage</option>
                                    </select>
                                </label>
                            </div>
                            <label>
                                <p>Location <span className="field-required">*</span></p>
                                <select value={this.state.newPost.location} onChange={this.handleChange} className="post-create__select" name="location">
                                    <option value="" disabled>Select neighborhood</option>
                                    <option value="Clinton Hill">Clinton Hill</option>
                                    <option value="Downtown Brooklyn">Downtown Brooklyn</option>
                                    <option value="East Village">East Village</option>
                                    <option value="Greenpoint">Greenpoint</option>
                                    <option value="Park Slope">Park Slope</option>
                                </select>
                            </label>
                            <div className="horizontal-field">
                                <label>
                                    <p>Title <span className="field-required">*</span></p>
                                    <input type="text" value={this.state.newPost.title} onChange={this.handleChange} name="title" />
                                </label>
                            </div>
                            <div className="horizontal-field">
                                <label className="field-right">
                                    <p>Price</p>
                                    <input type="text" value={this.state.newPost.price} onChange={this.handleChange} name="price" />
                                </label>
                            </div>
                            <label>
                                <p>Email</p>
                                <input type="text" value={this.state.newPost.email} onChange={this.handleChange} name="email" />
                            </label>
                            <label>
                                <p>Description <span className="field-required">*</span></p>
                                <textarea type="text" value={this.state.newPost.description} onChange={this.handleChange} name="description" cols="60" rows="4" />
                            </label>
                            <ImageUploader imageUrl={this.state.newPost.imageUrl} updateImages={this.handleImageUpdate} />
                            <label>
                                Delivery possible
                                <input type="checkbox" value={this.state.newPost.delivery} onChange={this.handleChange} name="canDeliver" />
                            </label>
                            <input type="submit" value="Submit" className="btn-primary-action" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCreate;