import {useEffect, useState} from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router';

import './App.css'
import Layout from './components/Layout.jsx';
import BookCreate from './pages/BookCreate.jsx';
import BookList from './pages/BookList.jsx';
import BookDetail from "./pages/BookDetail.jsx";
import BookEdit from "./pages/BookEdit.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <BookList/>,
            },
            {
                path: '/create',
                element: <BookCreate/>,
            },
            {
                path: '/books/:id',
                element: <BookDetail/>,
            },
            {
                path: 'books/:id/edit/:id',
                element: <BookEdit/>,
            },
        ]
    }
]);

function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
