import {useState, useEffect} from "react"
function useInnerWidth(){
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth)
     
    useEffect(()=>{
        const handleChange = () =>{
            setCurrentWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleChange)

        return () =>{
           window.removeEventListener("resize", handleChange)    
        }

    },[currentWidth])
    
   return currentWidth
}
export default useInnerWidth
