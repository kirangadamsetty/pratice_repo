
import {useSelector, useDispatch} from "react-redux"
import {resetForm,setUpdatekey ,updateForm,addingUser,updateUser, deleteUser,fetchingUsers} from "../utils/userSlice.jsx"
import {useEffect} from "react"
import {Button} from "react-bootstrap"

function UsersData(){
  const {formData, usersInfo, updateKey} = useSelector(store => store.users)
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(fetchingUsers())
  },[])
  const handleChange = (e) =>{
    dispatch(updateForm({[e.target.name] : e.target.value }))
  }
 const handleSubmit = (e) =>{
e.preventDefault()
if(updateKey){
  dispatch(updateUser(formData))
}else{
dispatch(addingUser(formData))
}
  
dispatch(resetForm())
dispatch(setUpdatekey(null))
 }
const handleUpdate = (user)=>{
  console.log(user)
  dispatch(setUpdatekey(user.id))
  dispatch(updateForm(user))
}


return(
  <>

 
<form style = {{display:"flex", flexDirection:"column",gap:"10px",alignItems:"start",padding:"5px",maxWidth:"max-content" ,border:"1px solid black"}}>
  <input type  = "text" value = {formData.name} placeholder = "Enter you name" name = "name" onChange = {(e)=>handleChange(e)}/>
  <input type  = "email" value = {formData.email} placeholder  = "Enter you email" name = "email" onChange = {(e)=>handleChange(e)}/>
<label > <input type  ="radio" name = "gender" value = "male" onChange = {(e)=>handleChange(e)} checked = {formData.gender === "male"} />Male</label>
<label><input type = "radio" name = "gender" value = "female" onChange = {(e)=>handleChange(e)} checked = {formData.gender === "female"}/>Female </label>
<select name = "status" value = {formData.status} onChange = {(e)=>handleChange(e)}>
  <option value = "active">Active</option>
  <option value  = "inactive">Inactive</option>
</select>
<Button onClick = {(e)=>handleSubmit(e)}>{updateKey ? "Update" : "Submit"}</Button> 
</form>
<div style = {{display:"flex", gap:"10px", flexWrap:"wrap"}}>
  {usersInfo.map((user)=>{
    return (
      <div key = {user.id} className = "border border-2 p-2">
        <h3>{user.name} - {user.status}</h3>
        <h5>{user.email} - {user.gender}</h5>
        <Button variant = "secondary" className = "fw-bold" onClick = {()=>handleUpdate(user)}>Update</Button>
        <Button variant = "danger" className  = "fw-bold ms-2" onClick = {()=>dispatch(deleteUser(user))}>Delete</Button>
      </div>
    )
  })}
</div>
 </>
)
}
export default UsersData





