import React, { useState } from 'react';

export default function AlertComponent(){
    let [number, change] = useState(23)
    return(
        <div>
            <button
            onClick={() => change(number-1)}
            >
                -
            </button>
            {number}
            <button
            onClick={() => change(number+1)}
            >
                +
            </button>
        </div>
    )
}
