import {useState, useRef} from "react"
function StopWatch(){
   const [timer, setTimer]= useState({
    minutes : 0,
    seconds : 0,
    hours : 0
   })
   
   const intervalRef = useRef(null)
   const startTimer = () =>{
    if(intervalRef.current !== null) return;
    intervalRef.current = setInterval(()=>{
      setTimer((prev)=>{
        let {minutes, seconds, hours}  = prev
        seconds++
        if(seconds === 60){
            minutes++
            seconds = 0

        }if(minutes === 60){
            hours++
            minutes = 0
        }
        return {seconds, hours , minutes}
      })
    },100)
   }
   
   const stopTimer = () =>{
    clearInterval(intervalRef.current)
    intervalRef.current = null
   }

   const resetTimer = () =>{
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setTimer({seconds : 0, minutes : 0, hours : 0})
   }
    return(
        <div>
           <div style = {{display:"flex",padding:"3px 10px",  maxWidth:"max-content"}}>
            <h1 style = {{border:"1px solid black", padding:"10px"}}>{timer.hours < 10 ? `0${timer.hours}`: timer.hours}</h1>
            <h1  style = {{border:"1px solid black", padding:"10px"}}>{timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}</h1>
            <h1  style = {{border:"1px solid black", padding:"10px"}}>{timer.seconds < 10  ? `0${timer.seconds}`: timer.seconds}</h1>
           </div>
            <button onClick ={startTimer}>Start Timer</button>
            <button onClick = {stopTimer}>Stop Timer</button>
            <button onClick = {resetTimer}>Reset</button>
        </div>
    )
}
export default StopWatch