import {useState, useEffect,useRef} from "react"
function OtpReceiver(){
 const numberofDigits = 5
 const [otpArray, setOtpArray] = useState(Array(numberofDigits).fill(""))
  const inputRef = useRef([])
  const handleChange = (e, index) =>{
     const value = e.target.value.trim()
     if(isNaN(value)) return
     const updatedArray = [...otpArray]
      updatedArray[index]  = value.slice(-1)
      setOtpArray(updatedArray)
      {value && inputRef.current[index+1].focus()}
  }
  useEffect(()=>{
     inputRef.current[0].focus()
  },[])
  const handleKeyDown = (e, index) =>{
    if(!e.target.value && e.key === "Backspace"){
        inputRef.current[index-1].focus()
    }
  }
    return(
    <div>
        {otpArray.map((value  , index)=>{
            return <input 
            onChange = {(e)=>handleChange(e, index)}
            onKeyDown = {(e)=>handleKeyDown(e, index)}
            style = {{padding:"5px", height:"150px", width:"150px", fontSize:"100px",textAlign:"center"}}
             value = {value} ref = {(e) => inputRef.current[index] = e}/>
        })}
    </div>
    )
}
export default OtpReceiver
















































