import {useState, useRef} from "react"

function StopWatch(){
  const [timer, setTimer]  = useState({
    seconds : 0, 
    minutes : 0,
    hours : 0
  })
  const style = {
    border:"1px solid black", 
    padding:"5px",

  }
   const timerRef = useRef(null)
  const handleStart  = () =>{
     if(timerRef.current) return
     timerRef.current = setInterval(() =>{
           setTimer((prev)=>{
            let {seconds, hours, minutes} = prev
            seconds++
            if(seconds === 60){
              minutes++
              seconds = 0
            } if(minutes === 60){
              hours++
              minutes = 0
            }
            return {seconds, hours, minutes}
           })
     },500)
  }
const handleStop = () =>{
   clearInterval(timerRef.current)
   timerRef.current = null
}
const handleReset = () =>{
  clearInterval(timerRef.current)
  setTimer({seconds : 0, hours  : 0, minutes : 0})
  timerRef.current  = null
}
  return(
    <>
 <div style = {{display:"flex"}}>
    <h1 style = {style}>{timer.hours}</h1>
    <h1 style = {style}>{timer.minutes}</h1>
    <h1 style = {style}>{timer.seconds}</h1>
  </div>
  <div>
    <button onClick = {handleStart}>Start</button>
    <button onClick = {handleStop}>Stop</button>
    <button onClick = {handleReset}>Reset</button>
  </div>
    </>
 
  )
}
export default StopWatch