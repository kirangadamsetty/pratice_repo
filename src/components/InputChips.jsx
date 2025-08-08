import {useState} from "react"
function InputChips(){
    const [data, setData] = useState([])
    const [inputVal , setInputVal] = useState("")
     const handleEvent = (e) =>{
             if(e.key === "Enter"){
              let updatedList  = [...data, inputVal]
              setData(updatedList)
               setInputVal("")
             }
        }
        const handleCancel = (item)=>{
            if(data.includes(item)){
                let index = data.filter((li)=> li !== item)
                setData(index)
            }
        }
    return(
       
      <div>
        <input type = "text"  value = {inputVal} onChange = {(e)=>setInputVal(e.target.value)} onKeyDown = {handleEvent}/>
        {data && data.map((chip)=>{
          return  <button style =  {{fontSize:"20px",backgroundColor:"gray", color:"black",padding:"5px", borderRadius:"5px" }}>{chip} <span onClick  = {()=>handleCancel(chip)}> x</span></button>
        })}
      </div>

    )
}
export default InputChips