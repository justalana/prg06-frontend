import React,{useEffect, useState } from 'react';
import BookShow from './BookShow.jsx';
import {Link} from "react-router";

function BookList() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await fetch(`http://145.24.223.206:8000/books`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data);

                setBooks(data.items);

            } catch (error) {
                console.error('Er is een fout opgetreden:', error);
            }
        }

        fetchBooks();
    }, []);

    return (
        <>
            <div className="grid grid-cols-2 gap-4 mb-20">
                {books.map((book) => (
                    <BookShow key={book.id} book={book}/>

                ))}
            </div>
        </>
    )
}

export default BookList
