"use client"
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Food from "@/components/Food";
import Input from "@/components/Input";
import Mycomponent from "@/components/Mycomponent";
import Wrapper from "@/components/Wrapper";


import React, { useState } from "react";



const food: string[] = ['Pizza', 'Hamburger', 'Coke'];

const Page = () => {
    const [inputValue, setInputValue] = useState('');

    //Task 14
    const [isClicked, setIsClicked] = useState(false);
    console.log(isClicked)

    return (
        <div>
            {/* Task 1 */}
            {/* <Mycomponent/> */}
            {/* Task 2 and 4*/}
            <Wrapper>
                <Mycomponent title=" It Works" />
            </Wrapper>

            {/* Task 6 */}
            {/* <ul>
            {food.map(foods=>{
                return <li key={foods}>{foods}
                    
                </li>
            })}
        </ul> */}

            {/* Task 7 */}
            <Food food={food} />

            {/* Task 8 */}
            {/* <Button /> */}

            {/* Task 9 */}
            {/* <Input /> */}

            {/* 13 */}
            <Alert inputValue={inputValue} setInputValue={setInputValue} setIsClicked={setIsClicked} />
            {/* task 13 */}
            <p>{inputValue}</p>
            {isClicked ? <p>{inputValue}</p> : null }


        </div>

    )
}

export default Page;