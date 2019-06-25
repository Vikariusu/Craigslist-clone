const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title cannot be blank!"
    },
    description: {
        type: String
    },
    email: {
        type: String
    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    condition: {
        type: String
    },
    imageUrl: {
        type: String
    },
    canDeliver: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;