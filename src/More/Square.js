import React from 'react';
import "../Tic-tac.css"

function Square({value}) {
    return (
        <>
            <button className='square'>
                {value}
            </button>
        </>
    );
}

export default Square