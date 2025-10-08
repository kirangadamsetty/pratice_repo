 
import React,{useState, useEffect, useRef } from "react"
function Throttle(){
    const [searchValue, setSearchValue] = useState("")
    const lastTime = useRef(null)
    useEffect(()=>{
     const now = Date.now()
     if(now- lastTime.current > 1000){
        lastTime.current = now
        console.log("Data fetching")
     }
      
   

    },[searchValue])

    return(
<input type = "search" value = {searchValue} onChange = {(e)=>setSearchValue(e.target.value)}/>
    )
}
export default React.memo(Throttle)