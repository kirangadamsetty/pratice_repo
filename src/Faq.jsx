import {faqInfo} from "./utils/faqData.jsx"
import {useState} from "react"

function Faq(){

const [status, setStatus]  = useState("")
const handleAccordian = (id) =>{
   status === id ? setStatus("") : setStatus(id)
}
    return(
       <div style = {{display:"flex", flexDirection:"column",alignItems:"center"}}>
        {faqInfo.map((data)=>{
            return (
                <div key = {data.id} style = {{  width:"50vw", cursor:"pointer"}} onClick = {()=>handleAccordian(data.id)}>
                    <h1 style = {{border:"1px solid black"}}>{data.question}</h1>
                    <p style = {{border:"1px solid red", marginTop:"-20px", display: status === data.id ? "block" : "none"}}>{data.reply}</p>
                </div>
            )
        })}
       </div>
    )
}
export default Faq