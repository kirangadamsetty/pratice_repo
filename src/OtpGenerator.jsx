import {useState, useEffect, useRef} from "react"
function OtpGenerator(){
    let numberOfDigits = 6
    const [otpArray, setOtpArray] = useState(Array(numberOfDigits).fill(""))
    const inputRef = useRef([])
    useEffect(()=>{
       inputRef.current[0]?.focus()
    },[])
    const handleChange = (e, index) =>{
       if(isNaN(e.target.value)) return;
       let newValue = e.target.value.trim()
       let newArray =[...otpArray]
       newArray[index]  = newValue.slice(-1)
       setOtpArray(newArray)
       if(newValue && inputRef.current[index+1]){
        inputRef.current[index+1]?.focus()
       }
    }
    const handleKeyDown = (e, index) =>{
        if(e.key === "Backspace" && !e.target.value){
            inputRef.current[index-1].focus()
        }
    }
    return(
        <>
       <h1>OTP GENERATOR</h1>
        <div>
            {otpArray.map((item, index)=>{
                return <input type = "text"
                key = {index}
                 inputMode = "numeric"
                 value  ={item}
                 style = {{textAlign:"center",border:"1px solid black",height:"50px", width:"50px", fontSize:"40px", borderRadius:"5px", margin:"5px"}}
                 onChange = {(e) => handleChange(e, index)}
                 ref = {(item)=>inputRef.current[index] = item}
                 onKeyDown = {(e)=>handleKeyDown(e, index)}
                 />
            })}
        </div>
         </>
    )
}
export default OtpGenerator