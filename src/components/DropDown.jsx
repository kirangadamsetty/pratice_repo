import {useState} from "react"
function DropDown(){
  const accordionData = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces, developed by Facebook."
  },
  {
    title: "What is a component?",
    content: "Components are the building blocks of React applications. They return JSX to render UI."
  },
  {
    title: "What is a hook?",
    content: "Hooks are special functions that let you use state and other React features without writing a class."
  },
  {
    title: "How does useState work?",
    content: "useState is a hook that allows you to add React state to function components."
  }
];
const [index, setIndex] = useState([])
const handleButton = (key) =>{
  if(index.includes(key)){
    let filteredData = index.filter((value)=>value !==key)
    setIndex(filteredData)
  }else{
    setIndex([key])
  }
}
  return(
 <>
  {accordionData.map((data,key)=>{
    return (
      <div key  = {key} style ={{width:"500px"}}>
        <button onClick = {()=>handleButton(key)}  style = {{width:"100%" , display:"flex", justifyContent:"space-between"}}>{data.title}<span>{index.includes(key)?"🔺":"🔻"}</span></button>
        {index.includes(key) && <p>{data.content}</p>}
      </div>
    )
  })}
 </>
  )
}
export default DropDown






