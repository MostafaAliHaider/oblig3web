

type FoodProp = {
    food: string[]
}

const Food = ({food}: FoodProp) => {
    return(
        <ul>
        {food.map(foods=>{
            return <li key={foods}>{foods}
                
            </li>
        })}
    </ul>
    )
}
export default Food;