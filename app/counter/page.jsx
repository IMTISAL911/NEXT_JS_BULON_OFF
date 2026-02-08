
"use client"

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter); 

    return (
        <div className="bg-white min-h-screen text-gray-800 flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-6 text-center">
                Counter Application
            </h1>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-600 mb-6">
                {counter}
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => dispatch(increment())}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
                >
                    INCREMENT
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
                >
                    DECREMENT
                </button>
            </div>
        </div>
    )
}
