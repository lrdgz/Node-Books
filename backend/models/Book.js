const { Schema, model } = require("mongoose");

const Book = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    imagePath: { type: String, required: true },
    created_at: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Book', Book);