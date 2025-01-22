import React from 'react';
import {Link} from "react-router";

function BookShow({book}) {
    return (
      <div className="p-5 border-4 border-white rounded-xl">
          <h2>{book.title}</h2>
          <Link to={`books/${book.id}`}>Details</Link>
      </div>
    )
}

export default BookShow;