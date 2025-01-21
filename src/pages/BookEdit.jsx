import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

function EditBook() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState({
        title: '',
        body: '',
        author: ''
    });

    useEffect(() => {
        async function fetchBook() {
            try {
                const response = await fetch(`http://145.24.223.206:8000/books/` + id, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                setBook({
                    title: data.title || '',
                    description: data.description || '',
                    author: data.author || '',
                });
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        }

        fetchBook();
    }, [id]);

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook((prevBook) => ({
        ...prevBook,
        [name]: value,
    }));
};

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch(`http://145.24.223.206:8000/books/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        })

        if (response.ok) {
            const updatedBook = await response.json();
            navigate('/');
        } else {
            console.error('Error updating book');
        }
    } catch (error) {
        console.error('Error updating book:', error);
    }
};

if (!book.title && !book.description && !book.author) {
    return <div>Loading...</div>;
}

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={book.title}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                id="description"
                name="description"
                value={book.description}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <label htmlFor="author">Author:</label>
            <input
                type="text"
                id="author"
                name="author"
                value={book.author}
                onChange={handleInputChange}
            />
        </div>
        <button type="submit">Save Changes</button>
    </form>
);
}

export default EditBook;