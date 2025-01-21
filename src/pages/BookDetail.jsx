import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router";

function BookDetail() {

    const [book, setBook] = useState([])

    const navigate = useNavigate();

    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        async function fetchBook() {
            try {
                const response = await fetch(`http://145.24.223.206:8000/books/` + id , {
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
            const response = await fetch(`http://145.24.223.206:8000/books/` + id , {
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
                <h1>{book.title}</h1>
                <p>{book.description}</p>
                <p>{book.author}</p>

                <button onClick={deleteClickHandler}>Delete</button>

                {/*De knop werkt niet op de detail pagina maar wel op de overzicht pagina?*/}
                {/*<Link to={`edit/${note.id}`}>Edit</Link>*/}
            </div>
        </>
    )
}

export default BookDetail
