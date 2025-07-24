import {useSelector, useDispatch} from "react-redux"
import {setFormData,fetchingData, updatingUser,addingUser,resetFormData,setUpdateKey, deleteUser} from "./utils/UserSlice.jsx"
import {useEffect} from "react"
function UsersProfile(){
    const {usersData, formData, updateKey } = useSelector(store => store.users)
    const dispatch = useDispatch()
    useEffect(()=>{ 
      dispatch(fetchingData())
    },[])
   const handleFormData = (e) =>{
       dispatch(setFormData({...formData, [e.target.name] : e.target.value}))
   }
   const handleSubmit = (e) =>{
    e.preventDefault()
    if(updateKey === null){
        dispatch(addingUser(formData))
    }else{
         dispatch(updatingUser({ key: updateKey, data: formData }))

    }  
    dispatch(resetFormData({name : "", email : "", gender:"male", status : ""}))
    dispatch(setUpdateKey(null))
   }

   const handleUpdate = (item) =>{
     dispatch(setFormData({...item}))
     dispatch(setUpdateKey(item.id))
   }

    return(
        <div>
          <form onSubmit = {(e)=>handleSubmit(e)} style = {{border:"1px solid black",margin:"10px", padding:"10px", maxWidth:"max-content",display:"flex", flexDirection:"column",alignItems:"start", gap:"20px"}}>
            <input name = "name" onChange = {(e)=>handleFormData(e)} value = {formData.name} type = "text"  placeholder ="Name" required/>
            <input name  = "email" onChange = {(e)=>handleFormData(e)}  value = {formData.email} type = "email" placeholder = "Email" required/>
            <label><input  onChange = {(e)=>handleFormData(e)}  checked = {formData.gender === "male"}  value = "male" type = "radio" name = "gender"/> Male</label>
             <label><input onChange = {(e)=>handleFormData(e)} value = "female" checked = {formData.gender === "female"} type = "radio" name = "gender"/> Female</label>
             <select  name = "status" value = {formData.status} onChange = {(e)=>handleFormData(e)}>
                <option  value = "active">Active</option>
                <option value = "inactive">Inactive</option>
             </select>
             <button>{updateKey ? "Update" : "submit"}</button>
          </form>
            <div style = {{display:"flex", gap:"10px", flexWrap:"wrap"}}>
            {usersData.map((item)=>{
                return <div key = {item.id} style = {{border:"1px solid black", padding:"5px",borderRadius:"5px"}}>
                    <h2>Name : {item.name}</h2>
                    <h3>Email : {item.email} </h3>
                    <h3>Gender : {item.gender}</h3>
                    <h3>Status : {item.status}</h3>
                    <button onClick = {()=>handleUpdate(item)}>Update</button>
                    <button onClick  = {()=> dispatch(deleteUser(item))}>Delete</button>
                </div>
            })}
           </div>
             </div>
     
    ) 
}
export default UsersProfile








