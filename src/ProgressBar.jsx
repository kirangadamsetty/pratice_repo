import {useState} from "react"
import Progress from "./Progress.jsx"
function ProgressBar(){
const [userInput, setUserInput] = useState(0)

console.log(userInput)
    return(
           <div>
<input type = "text" value = {userInput} onChange = {(e)=>setUserInput(e.target.value)}/>
<Progress percentage = {parseInt(userInput)||0}/>
           </div>
    )
}
export default ProgressBar





