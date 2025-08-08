import {useState, useRef} from "react"

function SelectColours(){
    const [pattern,setPattern] = useState([])
    const data = [
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]
    const totalLength = data.flat(1).filter(Boolean).length
    const intervalRef = useRef(null)
    const handleClick = (key) =>{
        if(pattern.includes(key)) return
        let newPattern = [...pattern, key]
        setPattern(newPattern)
         if(newPattern.length === totalLength){
             intervalRef.current = setInterval(()=>{
                setPattern((prev)=>{
                   let newResult = prev.slice(0,-1)
                   if(newResult.length === 0){
                    clearInterval(intervalRef.current)
                   }
                   return newResult
                })
             },300)
         }
    }
    return(
        <div>
            {data.map((array, index1)=>{
                return (
                    <div>
                        {array.map((value, index2)=>{
                            const key = [index1, index2].join("")
                            return value ? <button
                             style = {{
                                backgroundColor : pattern.includes(key) ? "yellow" : "white",
                                height:"150px", width:"150px", border:"1px solid black", margin:"10px"}}
                             onClick = {() => handleClick(key)}
                            >

                            </button> :
                            <button disabled style  = {{background:"none",border:"none",height:"150px", width:"150px"}}></button>
                        })}
                    </div>
                )
            })}
        </div>
    )
}
export default SelectColours