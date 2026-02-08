"use client" ;

import { configureStore } from "@reduxjs/toolkit";
import bulbReducer from "./bulbSlice";
import CounterSlice from "./counterSlice"


export const store = configureStore({
    reducer:{
        bulb : bulbReducer,
        counter: CounterSlice,    
    },
});