import {adding, removing, reset} from "./utils/CounterSlice.jsx"
import {useSelector, useDispatch} from "react-redux"
function Counter(){
    const dispatch = useDispatch()
    const counter = useSelector(store => store.counter)
    return(
          <div>
          <p>{counter.value}</p>
            <button onClick = {()=>dispatch(adding())}>Add</button>
            <button onClick = {()=>dispatch(removing())}>Remove</button>
            <button onClick = {()=>dispatch(reset())}>Reset</button>
          </div>
    )
}
export default Counter