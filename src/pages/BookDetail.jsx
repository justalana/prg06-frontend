import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router";

function BookDetail() {

    const [book, setBook] = useState([])

    const navigate = useNavigate();

    const {id} = useParams()

    useEffect(() => {
        async function fetchBook() {
            try {
                const response = await fetch(`http://145.24.223.206:8000/books/${id}` , {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                setBook(data);

            } catch (error) {
                console.error('Er is een fout opgetreden:', error);
            }
        }

        fetchBook();
    }, [id]);

    const deleteClickHandler = async () => {
        try {
            const response = await fetch(`http://145.24.223.206:8000/books/${id}` , {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            });

            navigate('/')

        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    return (
        <>
            <div>
                <h1>Title: {book.title}</h1>
                <p>Description: {book.description}</p>
                <p>Author: {book.author}</p>
                <p>Pages: {book.pages}</p>
                <p>Genre: {book.genre}</p>

                <button onClick={deleteClickHandler}>Delete</button>
                <Link to={`edit/${book.id}`}>Edit</Link>
            </div>
        </>
    )
}

export default BookDetail
