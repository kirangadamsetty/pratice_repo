import {useRef, useState} from "react"

function StopWatch(){
  const [timer, setTimer] = useState({
    seconds : 0,
    minutes : 0,
    hours : 0
  })
  
 let timerRef = useRef(null)
 const handleStart  = () =>{
   if(timerRef.current) return
   timerRef.current = setInterval(()=>{
      setTimer((prev)=>{
         let {seconds , hours, minutes} = prev
         seconds++
         if(seconds === 60){
          minutes++
          seconds = 0
         }else if(minutes === 60){
          hours++
          minutes = 0
         }
       return {hours, minutes, seconds}
      }
    
    )
   },1000)
 }

 const handleReset = () =>{
  clearInterval(timerRef.current)
   timerRef.current(null)
   setTimer({seconds : 0, hours : 0, minutes : 0})
 }

const handleStop = () =>{
  clearInterval(timerRef.current)
   timerRef.current(null)
}
const style = {
    height : "150px",
    width:"150px",
    border:"1px solid black",
    padding:"10px",
    fontSize:"30px"
  }

  return(
   <>
    <div>
      <span style = {style}>{timer.hours < 10 ? `0${timer.hours}` : timer.hours}</span>
      <span style = {style}>{timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}</span>
      <span style = {style}>{timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}</span>
    </div>
    <button onClick = {handleStart}>Start</button>
    <button onClick = {handleStop}>Stop</button>
    <button onClick = {handleReset}>Reset</button>
   </>
  )
}
export default StopWatch






