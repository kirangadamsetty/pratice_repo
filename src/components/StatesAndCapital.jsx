import { useState } from "react"

function StateAndCapital(){
    const [capital, setCapital]  = useState("")
    const [state, setState] = useState("")
    const data = {
        AndhraPradesh : "Amaravati", 
        Telangana : "Hyderabad",
        TamilNadu : "Chennai", 
        Karnataka : "Bengaluru", 
        Kerala : "Thiruvananthapuram"
    }
 const handleStateChange = (e) =>{
    let value = data[e.target.value]
    setCapital(value)
    setState(e.target.value)
 }
 const handleCapitalChange = (e) =>{
    let value = e.target.value
    for(let obj in data){
        if(data[obj] === value){
            setState(obj)
            setCapital(value)
            break
        }
    }
 }
return(
    <div>
        <select value = {state} onChange = {handleStateChange}>
        <option disabled value="">Select State</option>
           {
            Object.keys(data).map((value)=>{
                return (
                  
                  <option value = {value}>{value}</option>
                )
            })
           }
          
        </select>
        <select value = {capital} onChange = {handleCapitalChange}>
        <option disabled value=""> Select Capital</option>
            {
                Object.values(data).map((value)=>{
                    return(
                        <option value = {value}>{value}</option>
                    )
                })
            }
        </select>
    </div>
)
}
export default StateAndCapital

