

"use client";


import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    image : "/bulbof.png",
    isOn: false,
};

const bulbSlice = createSlice({
    name:"bulb",
    initialState,
    reducers: {
        turnOn :(state) =>{
            state.image ="/bulb-on.webp";
            state.isOn = true;
        },

        turnOff : (state) =>{
            state.image = "/bulbof.png";
            state.isOn = false;
        },
    },
});


export const {turnOn, turnOff} = bulbSlice.actions;
export default bulbSlice.reducer;