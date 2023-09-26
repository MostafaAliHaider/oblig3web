import React from 'react'

type InputType = {
    inputValue: any,
    setInputValue: any,
    setIsClicked: any
}

const Alert = ({inputValue, setInputValue, setIsClicked}:InputType) => {

    
    function handleChange(e:any){
        /* Task 9 */
        console.log("Change");
        console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const displayAlert = () => {
        //Task 11
       // alert(inputValue);
       setIsClicked((prev: any)=> !prev );
    };

    return (
        <div>
            {/* Task 12, 13*/}
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Type something" />
            <button onClick={displayAlert}>Click here and get an Alert</button>
        
        </div>
    )
}

export default Alert