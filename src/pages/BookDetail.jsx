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
                <h1 className="m-5">{book.title}</h1>
                <p className="m-5">{book.description}</p>
                <div className="m-10">
                    <p>Author: {book.author}</p>
                    <p>Pages: {book.pages}</p>
                    <p>Genre: {book.genre}</p>
                </div>


                <button onClick={deleteClickHandler} className="mx-5">Delete</button>
                <Link to={`edit/${book.id}`} className="rounded-lg mx-5 px-5 py-3 bg-neutral-900">Edit</Link>
            </div>
        </>
    )
}

export default BookDetail
