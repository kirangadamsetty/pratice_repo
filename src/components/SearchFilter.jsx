import {useState, useEffect, useRef} from "react"

function SearchFilter(){
   const [searchValue, setSearchValue] = useState("")
   const searchRef  = useRef(null)
   const fetchingData = () =>{
      console.log("Data Fetched Sucessfully")
   }
    useEffect(()=>{
      searchRef.current = setTimeout(()=>{
       fetchingData()
      },500)
      return () =>{
         clearTimeout(searchRef.current)
      }
    },[searchValue])
   return(
     <div>
      <input type = "search" value = {searchValue} onChange = {(e)=>setSearchValue(e.target.value)}/>
      
     </div>
   )
}
export default SearchFilter



