// Books array
const myLibrary = [];

//
// Books object constructor and prototype methods
//
function Books (title, author, pages, read) {
    if (!new.target) {
        throw error("You  must use the 'new' operator to call the constructor");
    };
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Books.prototype.isRead = function() {
    return this.read ? 'read' : 'not read yet';
}

Books.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages,
            ${this.read ? 'read' : 'not read yet'}`;
}

//
// Add books to the library and display them
//
const addBookToLibrary = (title, author, pages, read) => {
    const book = new Books(title, author, pages, read);
    myLibrary.push(book);
}

const displaybooks = () => {
    myLibrary.forEach((book) => {
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');
        bookInfo.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.isRead()}</p>
        `;
        document.appendChild(bookInfo);
        const bookList = document.querySelector('.book-list');
        bookList.appendChild(bookInfo);
    })
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 277, false);
displaybooks();


