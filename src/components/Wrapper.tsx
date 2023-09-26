import React from "react";


const Wrapper = ({children}: any) => {
    return (
        <section className="flex flex-col border-4  border-indigo-500">
             {children}
             <h1 className="bg-red-300">heyyy</h1>
        </section>
    )
}

export default Wrapper;