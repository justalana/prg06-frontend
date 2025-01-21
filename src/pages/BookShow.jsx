import React from 'react';
import {Link} from "react-router";

function BookShow({book}) {
    return (
      <div>
          <h2>{book.title}</h2>
          <Link to={`books/${book.id}`}>Details</Link>
          <Link to={`edit/${book.id}`}>Edit</Link>
      </div>
    )
}

export default BookShow;