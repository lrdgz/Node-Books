import BookService from './services/BookService';
const bookService = new BookService();

import { format } from 'timeago.js';

class UI {

    async renderBooks() {
        const container = document.getElementById('books-cards');
        const books = await bookService.getBooks().then(res => {
            container.innerHTML = '';
            res.data.forEach(book => {
                const div = document.createElement('div');
                div.className = '';
                div.innerHTML = `
                    <div class="card m-2">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="http://localhost:3000/${book.imagePath}" alt="${book.imagePath}" class="img-fluid" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-block px-2"> 
                                    <h4 class="card-title">${book.title}</h4>
                                    <p class="card-text">${book.author}</p>
                                    <a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            ${format(book.created_at)}
                        </div>
                    </div>
                `;
                container.appendChild(div);
            });
        });
    }

    async addANewBook(book) {

        console.log('add book:', book);
        await bookService.postBooks(book).then(res => console.log(res));
        this.renderBooks();
        this.ClearBookForm();

    }

    ClearBookForm() {
        document.getElementById('book-form').reset();
    }

    renderMessage() { }


    async deleteBook(book) {
        await bookService.deleteBooks(book).then(res => {
            this.renderBooks();
        });
    }
}


export default UI;