"use client"

const Button = () => {
    
    const handleClick = () => {
        console.log("Clicked")
    }
    
    return(
        <div>
            
           <button onClick={handleClick}>Click me</button>
       
        </div>
    ) 
    
}
export default Button;