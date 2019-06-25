const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Title cannot be blank!"
    }
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
