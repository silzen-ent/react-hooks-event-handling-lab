// Code Keypad Component Here

import React from 'react';


function Keypad (){
    function handleChange(){
        console.log("Entering password...")
    }
    
    return (
        <div> 
            <input type="password" onChange={handleChange}/>  
        </div>
    )
}

export default Keypad

// D1, S1: add the <input> element to Keypad comp. 