import {useState} from "react"

function TodoList(){
    const [userInput, setUserInput] = useState("")
    const [todoData, setTodoData]  = useState(()=>{
        let stored = localStorage.getItem("storedData")
         return stored ? JSON.parse(stored) : []
    })
    const [updateKey, setUpdateKey] = useState(null)
    const handleUserInput = (e) =>{
       setUserInput(e.target.value)
    }

    const handleSubmit  = () =>{
        if(!userInput) return
    let updatedData = [...todoData]
        if(updateKey !== null){
            
            updatedData[updateKey].todo = userInput
            
        }else{
          let obj = {todo :userInput, checked : false}
          updatedData.push(obj)
        }
       localStorage.setItem("storedData", JSON.stringify(updatedData))
       setTodoData(updatedData)
        setUserInput("")
       setUpdateKey(null)
    }

    const handleDelete = (item) =>{
        const fileredData = todoData.filter((obj) => obj.todo !== item)
        localStorage.setItem("storedData", JSON.stringify(fileredData))
        setTodoData(fileredData)
    }
    const handleTaskComplete = (item) =>{
       const index = todoData.findIndex((obj) => obj.todo === item.todo)
       let updatedList = [...todoData]
       updatedList[index].checked = true
        localStorage.setItem("storedData", JSON.stringify(updatedList))
       setTodoData(updatedList)
    }
    const handleUpdate = (item, index) =>{
         setUpdateKey(index)
         setUserInput(item)
    }

    return(
<div>
    <input type = "text" value = {userInput} onChange = {handleUserInput}/>
    <button onClick = {handleSubmit}>{updateKey !== null ? "UPDATE" :"ADD"}</button>
     <div>
        {
             todoData.map((item, index)=>{
                return (
                    <div>
                        <p style = {{textDecoration: item.checked ? "line-through" : "none"}}>{item.todo}</p>
                        <button onClick = {() =>handleUpdate(item.todo, index)}>Update</button>
                        <button onClick = {()=>handleDelete(item.todo)}>Delete</button>
                        <button onClick = {() =>handleTaskComplete(item)}>Taskcompleted</button>
                    </div>
                )
             })
        }
     </div>
</div>
    )
}
export default TodoList







