import React from 'react';

function AddPerson({clickHandler}) {
    return (
        <button onClick={() => clickHandler()}>Verzenden</button>
    )
}

export default AddPerson;