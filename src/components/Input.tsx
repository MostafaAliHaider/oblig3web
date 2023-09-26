"use client"

import { useState } from "react";
import Button from "./Button";



const Input = () => {
    /* Task 10 */
    const [inputValue, setInputValue] = useState('');


    function handleChange(e:any){
        /* Task 9 */
        console.log("Change");
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const displayAlert = () => {
        alert(inputValue);
    };

    return (
        <>
        {/* Task 10 */}
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Type something"/>
        <button onClick={displayAlert}>Click here and get an Alert</button>
        </>
    )
};
export default Input;