class Bookservice {

    constructor() {
        this.URI = "http://localhost:3000/api/books";
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const books = await response.json();
        return books;
    }

    async postBooks(book) {
        const response = await fetch(this.URI, {
            method: 'POST',
            body: book
        });

        const create = await response.json();
        return create;
    }

    async deleteBooks(book) {
        const response = await fetch(`${this.URI}/${book}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });

        const remove = await response.json();
        return remove;
    }

}


module.exports = Bookservice;