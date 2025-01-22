import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";

function BookCreate() {
    // {addNote}
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        author: '',
        pages: '',
        genre: '',
    });

    // Generieke handler voor het bijwerken van de state
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(formData);
    };

    const navigate = useNavigate();

    async function createBook(bookData) {
        try {
            const response = await fetch('http://145.24.223.206:8000/books', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookData)
            });

            const data = await response.json();
            console.log(data);

            navigate('/books/' + data.id)
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description::</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="pages">Pages:</label>
                <input
                    type="text"
                    id="pages"
                    name="pages"
                    value={formData.pages}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="genre">Genre:</label>
                <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
}

export default BookCreate;
