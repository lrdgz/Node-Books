// require('./styles/style.css');
import './styles/app.css';
import UI from './UI';
import { DocumentQuery } from 'mongoose';

document.addEventListener('DOMContentLoaded', () => {
    console.log('LOADED DOM');
    const ui = new UI();
    ui.renderBooks();
});

document.getElementById('book-form').addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;

    const data = new FormData();
    data.append('title', title);
    data.append('author', author);
    data.append('isbn', isbn);
    data.append('image', image[0]);

    const ui = new UI();
    ui.addANewBook(data);

});

document.getElementById('books-cards').addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        const id = e.target.getAttribute('_id');
        const ui = new UI();
        ui.deleteBook(id);
    }
});