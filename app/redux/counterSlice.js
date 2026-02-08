import { createSlice } from "@reduxjs/toolkit";
import Counter from "../counter/page";


 const initialState = {

    counter : 0,
 };

 const CounterSlice = createSlice({
    name : "counter",
    initialState,
    reducers:{
        increment : (state) =>{
            state.counter +=1;
        },
        decrement : (state) =>{
            state.counter -=1;
        },
    }
 });


 export const {increment ,decrement} = CounterSlice.actions;
 export default CounterSlice.reducer;

