import {useState} from "react"
function StateAndCapital(){
    const [state, setState] = useState()
    const [capital , setCapital] = useState()
    const data = {
        AndhraPradesh : "Amaravati", 
        Telangana : "Hyderabad",
        TamilNadu : "Chennai", 
        Karnataka : "Bengaluru", 
        Kerala : "Thiruvananthapuram"
    }
    const handleStateChange = (e) =>{
       setState(e.target.value)
       setCapital(data[e.target.value])

    }
    const handleCapitalChange = (e) =>{
        let value = e.target.value
        setCapital(value)
        for(let obj in data){
            if(data[obj] === value){
                setState(obj)
            }
        }
    }
    return(
       <div>
           <select value = {state} onChange = {handleStateChange}>
            {Object.keys(data).map((item)=>{
                return <option value = {item}>{item}</option>
            })}
           </select>
           <select value = {capital} onChange = {handleCapitalChange}>
            {Object.values(data).map((item)=>{
                return <option value = {item}>{item}</option>
            })}
           </select>
       </div>
    )
}

export default StateAndCapital

































