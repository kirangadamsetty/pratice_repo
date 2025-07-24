import {useState} from "react"
function StateandCapital(){
    const [result , setResult]  = useState("")
    const data = {
        AndhraPradesh : "Amaravathi",
        Telangana : "Hyderabad",
        Karnataka : "Bengaluru",
        TamilNadu : "Chennai",
        Kerala : "Tiruvnanthapuram",
        Maharastra : "Mumbai",
        MadhyaPradesh : "Bhopal",
        Odissa : "Bhuvaneshwar",
        Gujarat : "Ahamadabad"
    }
    return(
        <>
       <select  onChange = {(e)=>setResult((e.target.value))}>
        {
            [...Object.keys(data)].map((item)=>{
               return <option key  ={item}> {item}</option>
            })
        }
        <option disabled selected>SelectState</option>
       </select>
       <input type = "text" value = {data[result]}/>
       </>
    )
}
export default StateandCapital













