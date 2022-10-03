import { v4 as uuidv4 } from 'uuid';

let books = []

export const getBooks = (req, res) => {
    console.log(`Books in the database: ${books}`);
    res.send(books);
}

export const createBook = (req, res) => {
    const book = req.body;

    books.push({ ...book, id: uuidv4() });

    res.send(`Book with the title "${book.title}" added to the DATABASE`);
}

export const getBook = (req, res) => {
    const {id} = req.params;

    const foundBook = books.find((book) => book.id === id);

    res.send(foundBook);
}

export const deleteBook = (req, res) => {
    const {id} = req.query;

    books = books.filter((book) => book.id !== id);

    res.send(`Book with the id "${id}" deleted from DATABASE.`);
}

export const updateBook = (req, res) => {
    const {id} = req.params;
    const {title, author, publishedAt} = req.body;
    const book = books.find((book) => book.id == id);

    if(title) book.title = title;
    if(author) book.author = author;
    if(publishedAt) book.publishedAt = publishedAt;

    res.send(`Book with the id "${id}" has been updated in DATABASE.`);
}