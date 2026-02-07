"use client" ;

import { configureStore } from "@reduxjs/toolkit";
import bulbReducer from "./bulbSlice";


export const store = configureStore({
    reducer:{
        bulb : bulbReducer,
    },
});