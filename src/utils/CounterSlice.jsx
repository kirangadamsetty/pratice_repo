import {createSlice} from "@reduxjs/toolkit"

const CounterSlice = createSlice({
    name : "counter",
    initialState : {value: 0},
    reducers : {
        adding : (state) =>{
            state.value = state.value + 1
        },removing : (state) =>{
            state.value = state.value -1
        },reset : (state) =>{
            state.value = 0
        }
    }
})

export const {adding, removing, reset} = CounterSlice.actions
export default CounterSlice.reducer


