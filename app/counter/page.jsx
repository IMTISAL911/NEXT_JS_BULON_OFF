"use client"

import { useState } from "react"

export default function Counter () {

    const [counter, setCounter] = useState(0)

    const increment = () =>{
        setCounter(counter +10)
        if(counter +10 > 100 ){
            alert("limit has reached !")
            setCounter(100)
        }
    }

    const decrement = () =>{
        setCounter(counter-10);
        if(counter -10 < 0) {
            alert("dont cross limit 0 is last option");
            setCounter(counter)
        }
    }

    return (
        <div className="bg-white min-h-screen text-gray-800 flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-6 text-center">
                Counter Application
            </h1>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-600 mb-6">
                {counter}
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    INCREMENT
                </button>
                <button onClick={decrement} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    DECREMENT
                </button>
            </div>
        </div>
    )
}
