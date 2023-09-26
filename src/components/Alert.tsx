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
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Type something" className= "border-indigo-500" />
            <button className="bg-red-100" onClick={displayAlert}>Write in the input and click here to get an Alert</button>
            
        </div>
    )
}

export default Alert