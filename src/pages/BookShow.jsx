import React from 'react';
import {Link} from "react-router";

function BookShow({book}) {
    return (
      <div className="border-white rounded-xl">
          <h2>{book.title}</h2>
          <Link to={`books/${book.id}`}>Details</Link>
      </div>
    )
}

export default BookShow;