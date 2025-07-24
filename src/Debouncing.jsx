import {useState, useEffect, useRef} from "react"

function Debouncing(){
    const [userInput, setUserInput] = useState("")
    const intervalRef = useRef(null)
    useEffect(()=>{
        if(userInput.length === 0) return
       intervalRef.current = setTimeout(()=>{
          console.log("Data fetched sucessfully")
       }, 500)

       return () =>{
        clearInterval(intervalRef.current)
       }
    },[userInput])
    return(
      <div>
        <input type = "text" value = {userInput} onChange = {(e)=>setUserInput(e.target.value)}/>
      </div>
    )
}

export default Debouncing



