const { Router } = require('express');
const router = Router();

const Book = require('../models/Book');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json({
        message: 'List',
        data: books
    });
});

router.post('/', async (req, res) => {
    const { title, author, isbn } = req.body;
    const book = await new Book({ title, author, isbn });
    book.save();
    res.json({
        message: 'Created',
        data: book
    });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    res.json({
        message: 'Deleted',
        data: book
    });
});


module.exports = router;