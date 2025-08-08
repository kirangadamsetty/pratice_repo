import { useEffect} from "react"
import {fetchUsers,updateUser,addUser,setUpdateKey, setFormData, deleteUser, resetForm} from "../utils/usersSlice.jsx"
import {useSelector, useDispatch} from "react-redux"
function UsersData(){
   const {usersInfo, updateKey, formData} = useSelector(store => store.users)

   const dispatch = useDispatch()
   useEffect(()=>{
     dispatch(fetchUsers())
   },[])
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(updateKey){
        dispatch(updateUser(formData))
    }else{
 dispatch(addUser(formData))
    }
   
dispatch(resetForm())
dispatch(setUpdateKey(null))
    
  }

  const handleChange = (e)=>{
    dispatch(setFormData({...formData, [e.target.name] : e.target.value}))
  }
  const handleDelete = (user) =>{
     dispatch(deleteUser(user))
  }
  const handleUpdate = (user) =>{
    dispatch(setUpdateKey(user.id))
    dispatch(setFormData({...formData, ...user}))
  }
return(
    <>
   <form onSubmit = {handleSubmit} style = {{border:"1px solid black", padding:"10px", maxWidth:"max-content",margin:"10px", display:"flex", flexDirection:"column" ,gap:"10px", alignItems:"flex-start"}}>
    <input type = "text" placeholder = "Full Name" onChange = {handleChange} name = "name" value  ={formData.name} required/>
    <input type = "email" placeholder = "Email" onChange = {handleChange} name = "email" value = {formData.email} required/>
    <label><input type = "radio" value = "male" onChange = {handleChange} name = "gender" checked = {formData.gender === "male"}/>Male</label>
   <label><input type = "radio" value = "female" onChange = {handleChange} name = "gender" checked = {formData.gender === "female"}/>Female</label>
   <select value = {formData.status} name  = "status" onChange = {handleChange}>
    <option value = "active">Active</option>
    <option value = "inactive">Inactive</option>
   </select>
   <button>Submit</button>
   </form>
  
    <div style = {{display:"flex", flexWrap:"wrap", gap:"10px"}}>
        {usersInfo.map((user)=>{
            return (
                <div style ={{padding:"10px",border:"1px solid black"}}>
                    <h1>{user.name}</h1>
                    <p>{user.email} - {user.gender}</p>
                    <p>{user.status}</p>
                    <button onClick = {()=>handleUpdate(user)}>update</button>
                    <button onClick = {()=>handleDelete(user)}>Delete</button>
                </div>
            )
        })}
    </div>
      </>
)
}
export default UsersData