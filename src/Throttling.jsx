import {useState, useEffect, useRef} from "react"

function Throttling(){
    const [userInput, setUserInput] = useState("")
    const timer = useRef(0)
    useEffect(()=>{
        if(userInput.length === 0) return;
       let currentTime = Date.now()
       if(currentTime - timer.current > 1000){
          console.log("Feched Results")
          timer.current = currentTime
       }
    }, [userInput])
    return(
       <input type = "text" value = {userInput} onChange = {(e)=> setUserInput(e.target.value)}/>
    )
}
export default Throttling