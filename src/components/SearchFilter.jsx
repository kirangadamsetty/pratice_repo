import {useState, useEffect, useRef} from "react"

function SearchFilter(){
    const [searchResults, setSearchResults] = useState([])
    const [inputVal, setInputVal] = useState("")
    const users = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Evelyn",
  "Fiona",
  "George",
  "Hannah"
];
  let timerRef = useRef(null)


useEffect(()=>{
   if (inputVal.trim().length === 0) {
      setSearchResults([]);
      return;
    }

 timerRef.current = setTimeout(()=>{
    let updatedData = users.filter((user)=> user.toLowerCase().includes(inputVal.toLowerCase()))
    setSearchResults(updatedData)
    console.log(updatedData)
    console.log(searchResults)
 },500)

 return () =>{
    clearTimeout(timerRef.current)
 }
},[inputVal])
   
    return(
       <div>
        <input type = "search" 
        value = {inputVal}
            style = {{fontSize:"15px", fontWeight:"600",borderRadius:"10px",border:"1px solid black" , padding:"5px"}}
           onChange = {(e)=> setInputVal(e.target.value)}
        />
        <ul>
        {inputVal.length > 0 &&
            searchResults.map((item, index)=>{
                
                 return   <li key = {index}>{item}</li>
           
            })
      
        }
                   </ul>
       </div>
    )
}
export default SearchFilter