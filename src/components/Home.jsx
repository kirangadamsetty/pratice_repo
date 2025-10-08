import React from 'react'
import  useOnlineStatus from "../utils/useOnlineStatus.jsx"
import {useState} from "react"
const Home = () => {
  const [count, setCount] = useState(0)
  const onlineStatus = useOnlineStatus()
  console.log(onlineStatus)
  const handleFunction  = () =>{
    console.log("Function Clicked")
  }
  return (
    <div>
      <button onClick = {()=>setCount(prev => prev + 1)}>{`count ${count}`}</button>
      <button onClick = {handleFunction}>handleFunction</button>
    </div>
  )
}

export default Home
