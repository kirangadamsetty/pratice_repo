import {useState, useEffect, useRef} from "react"


function SelectColours(){
    const data = [
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]
    const [pattern, setPattern]  = useState([])
    const patternRef = useRef(null)
    const totalLength = data.flat(1).filter(Boolean).length
    useEffect(()=>{
        if(patternRef.current) return
      if(totalLength ===pattern.length){
       patternRef.current =  setInterval(()=>{
          setPattern((prev)=>{
            const updatedData = [...prev]
            const slicedProducts = updatedData.slice(0,-1)
             if(slicedProducts.length === 0){
                clearInterval(patternRef.current)
             }
             return slicedProducts
          })
        },500)
      }
    },[pattern])
    const handleButton = (key) =>{
        if(pattern.includes(key)) return
        setPattern(prev =>([...prev, key]))
    }
    return(
        <div>
            {data.map((value, index)=>{
                return <div>
                    {
                        value.map((value2, index2)=>{
                            const key = [index, index2].join("")
                            return (
                                <button 
                                onClick = {()=>handleButton(key)}
                                style = {{backgroundColor: pattern.includes(key) ?"yellow" : "white",height:"150px",margin:"5px", width:"150px", padding:"5px"}}></button>
                            )
                        })
                    }
                </div>
            })}
        
        </div>
    )
   
}
export default SelectColours