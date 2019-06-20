const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title cannot be blank!"
    }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;

// description: {
//     type: String,
//         required: "Description cannot be blank!"
// },
// email: {
//     type: String,
//         required: "Email cannot be blank!"
// },
// price: {
//     type: Number
// },
// location: {
//     type: String
// },
// condition: {
//     type: String
// },
// imageUrl: {
//     type: String
// },
// canDeliver: {
//     type: Boolean,
//         default: false
// },
// created_date: {
//     type: Date,
//         default: Date.now
// }