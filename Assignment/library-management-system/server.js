const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies and serve static frontend files
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory data store for books
let books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: '1960' },
    { id: 2, title: '1984', author: 'George Orwell', year: '1949' }
];

let nextId = 3;

// 1. GET: Retrieve all books[span_3](start_span)[span_3](end_span)
app.get('/api/books', (req, res) => {
    res.status(200).json(books);
});

// 2. POST: Add a new book[span_4](start_span)[span_4](end_span)
app.post('/api/books', (req, res) => {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
        return res.status(400).json({ message: 'All fields (title, author, year) are required.' });
    }

    const newBook = {
        id: nextId++,
        title,
        author,
        year
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// 3. PUT: Update book details[span_5](start_span)[span_5](end_span)
app.put('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author, year } = req.body;

    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found.' });
    }

    books[bookIndex] = {
        id: bookId,
        title: title || books[bookIndex].title,
        author: author || books[bookIndex].author,
        year: year || books[bookIndex].year
    };

    res.status(200).json(books[bookIndex]);
});

// 4. DELETE: Delete a book[span_6](start_span)[span_6](end_span)
app.delete('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found.' });
    }

    const deletedBook = books.splice(bookIndex, 1);
    res.status(200).json({ message: 'Book deleted successfully', book: deletedBook[0] });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});