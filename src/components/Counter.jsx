import {useReducer} from "react"
const initialState = {count : 0}
const reducer = (state, action) =>{
    switch(action.type){
        case "Increment":
            return {count : state.count + 1}
        case "Decrement":
            return {count : state.count -1}
        case "Reset":
            return {count : state.count = 0}
    }
}




function Counter(){
    const [state, dispatch ] = useReducer(reducer, initialState)
    return(
     <div>
        <h1>{state.count}</h1>
        <button onClick = {()=> dispatch({type:"Increment"})}>Increase</button>
        <button onClick = {()=> dispatch({type:"Decrement"})}>Decrease</button>
        <button onClick = {()=> dispatch({type:"Reset"})}>Reset</button>
     </div>
    )
}
export default Counter