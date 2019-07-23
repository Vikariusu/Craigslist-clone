import React from 'react';

class PostCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            newPost: {
                category: '',
                title: '',
                price: '',
                email: '',
                description: '',
                delivery: false
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
        event.preventDefault();

        let queryURL = 'http://localhost:7777/api/posts/';
        let data = this.state.newPost;

        fetch(queryURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...data})
        })
    }

    render() {
        return (
            <div className="post-create__outer">
                <div className="post-create__inner">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Category:
                            <select value={this.state.newPost.category} onChange={this.handleChange} name="category">
                                <option value="">Select category</option>
                                <option value="furniture">furniture</option>
                                <option value="test">test</option>
                                <option value="garden">garden</option>

                            </select>
                        </label>
                        <label>
                            Title:
                        <input type="text" value={this.state.newPost.title} onChange={this.handleChange} name="title"/>
                        </label>
                        <label>
                            Price:
                        <input type="text" value={this.state.newPost.price} onChange={this.handleChange} name="price"/>
                        </label>
                        <label>
                            Email:
                        <input type="text" value={this.state.newPost.email} onChange={this.handleChange} name="email"/>
                        </label>
                        <label>
                            Description:
                        <textarea type="text" value={this.state.newPost.description} onChange={this.handleChange} name="description" cols="60" rows="4" />
                        </label>
                        <label>
                            Delivery possible:
                        <input type="checkbox" value={this.state.newPost.delivery} onChange={this.handleChange} name="canDeliver" />
                        </label>
                        <input type="submit" value="Submit" className="btn-primary"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostCreate;