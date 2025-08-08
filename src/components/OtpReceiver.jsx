import {useState , useEffect, useRef} from "react"

function OtpReceiver(){
  const totalOtpDigits = 5
  const [otpArray, setOtpArray] = useState(Array(totalOtpDigits).fill(""))
  const inputRef = useRef([])

useEffect(()=>{
    inputRef.current[0].focus()
},[])
const handleChange = (e,index) =>{
    
    if(isNaN(e)) return
    let newValue = e.trim()
    let updatedArray = [...otpArray]
    updatedArray[index] = newValue.slice(-1)
    setOtpArray(updatedArray)
   e && inputRef.current[index+1].focus()

}
const handleBack = (e,index)=>{
    if(e.key === "Backspace" && !otpArray[index]){
       inputRef.current[index-1].focus()
    }
}

    return(
     <div>
        {otpArray.map((value, index)=>{
            return (
                <input 
                value = {value}
                onKeyDown = {(e)=>handleBack(e, index)}
                onChange = {(e)=>handleChange(e.target.value,index)}
                ref = {(e) => inputRef.current[index]  = e}
                type = "text" style = {{fontSize:"40px",padding:"10px",textAlign:"center",height:"50px", width:"50px", border:"1px solid black"}}/>
             
            )
        })}
     </div>
    )
}

export default OtpReceiver


































