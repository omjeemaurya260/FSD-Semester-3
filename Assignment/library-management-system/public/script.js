const API_URL = '/api/books';

const bookForm = document.getElementById('book-form');
const bookIdInput = document.getElementById('book-id');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const yearInput = document.getElementById('year');

const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const tableBody = document.getElementById('books-table-body');

// Fetch and render all books on page load
document.addEventListener('DOMContentLoaded', fetchBooks);

// 1. GET: Fetch all books[span_10](start_span)[span_10](end_span)
async function fetchBooks() {
    try {
        const response = await fetch(API_URL);
        const books = await response.json();
        renderTable(books);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

// Render books into HTML Table
function renderTable(books) {
    tableBody.innerHTML = '';
    
    if (books.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No books available.</td></tr>`;
        return;
    }

    books.forEach(book => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${book.id}</td>
            <td>${escapeHtml(book.title)}</td>
            <td>${escapeHtml(book.author)}</td>
            <td>${book.year}</td>
            <td class="action-cells">
                <button class="btn btn-edit" onclick="startEdit(${book.id}, '${escapeHtml(book.title)}', '${escapeHtml(book.author)}', '${book.year}')">Edit</button>
                <button class="btn btn-delete" onclick="deleteBook(${book.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

// 2 & 3. POST & PUT: Handle Form Submission[span_11](start_span)[span_11](end_span)
bookForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = bookIdInput.value;
    const bookData = {
        title: titleInput.value.trim(),
        author: authorInput.value.trim(),
        year: yearInput.value.trim()
    };

    try {
        if (id) {
            // PUT: Update Existing Book[span_12](start_span)[span_12](end_span)
            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            });
        } else {
            // POST: Add New Book[span_13](start_span)[span_13](end_span)
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            });
        }

        resetForm();
        fetchBooks();
    } catch (error) {
        console.error('Error saving book:', error);
    }
});

// Populate Form for Updating
function startEdit(id, title, author, year) {
    bookIdInput.value = id;
    titleInput.value = title;
    authorInput.value = author;
    yearInput.value = year;

    formTitle.innerText = 'Edit Book Details';
    submitBtn.innerText = 'Update Book';
    cancelBtn.classList.remove('hidden');
}

// Cancel Editing
cancelBtn.addEventListener('click', resetForm);

function resetForm() {
    bookIdInput.value = '';
    bookForm.reset();
    formTitle.innerText = 'Add New Book';
    submitBtn.innerText = 'Add Book';
    cancelBtn.classList.add('hidden');
}

// 4. DELETE: Remove a Book[span_14](start_span)[span_14](end_span)
async function deleteBook(id) {
    if (!confirm('Are you sure you want to delete this book?')) return;

    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        fetchBooks();
    } catch (error) {
        console.error('Error deleting book:', error);
    }
}

// Helper to prevent XSS
function escapeHtml(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, "&quot;");
}