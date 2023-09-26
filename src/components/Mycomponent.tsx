import Title from "./Title";

//im using page instead of App as the default main page
const Mycomponent = ({title}) => {
    return(
        <>
        {/* Task 1 */}
         <h1>1. My First Component</h1>
        {/* Task 2 */}
        {/* <h1>{title}</h1>  */}
        {/* Task 3 */}
        <Title title={title}/>
        </>
    )
}

export default Mycomponent;