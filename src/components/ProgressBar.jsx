import {useState } from "react"

function ProgressBar(){
  const [width, setWidth]  = useState("")
  const handleChange  = (e) =>{
   if(isNaN(e.target.value)) alert("Enter number")
    if(e.target.value < 0 || e.target.value > 100) setWidth("")
    else setWidth(e.target.value)
  }
  return(
    <>
<input type = "text" value = {width} onChange={(e)=>handleChange(e)}/>
<div style = {{height:"6px", padding:"6px", border:"1px solid black",position:"relative" }}>

 {width && <hr style = {{transition:"1s ease", margin:"0",backgroundColor:"red",height :"5px", width:`${width}%`, position:"absolute", top:'5px', left:"0"}}/>}
</div>
    </>
  
  
  )
}
export default ProgressBar