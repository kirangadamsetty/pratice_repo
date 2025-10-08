
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"  

const url = "https://gorest.co.in/public/v2/users"
const token = "221f55519d6804d85dad5824be750b54e3de0313d2a5e7c1ffcabc8e6fa8b517"
const headers = {
  "Content-Type" : "application/json",
  Accept : "application/json",
  Authorization: `Bearer ${token}`

}
export const fetchingUsers = createAsyncThunk("users/fetchingUsers", async()=>{
  try{
    const response = await fetch(url)
    if(!response.ok) throw new Error("!failed to fetch")
    const result = await response.json()
    return result      
  }catch(error){
    console.log(error)
  }


})

export const addingUser = createAsyncThunk("users/addingUser", async(data)=>{
  try{
    const response = await fetch(url, {
      method : "POST",
      headers, 
      body : JSON.stringify(data)
    })

    if(!response.ok) throw new Error("!failed to fetch Data")
      const result = await response.json()
    console.log(result)
    return result
  }catch(error){
    console.log(error)
  }
})

export const deleteUser  = createAsyncThunk("users/deleteUser", async(user)=>{
  try{
 const response = await fetch(url + `/${user.id}`, {
      method : "DELETE",
      headers ,

     })
   if(!response.ok) throw new Error("!failed to delete") 
   const result = await response.status
    return user.id
  }catch(error){
    console.log(error)

  }
    
}) 

export const updateUser = createAsyncThunk("users/updateUser", async(data)=>{
  try{
    const response = await fetch(url +`/${data.id}` , {
      method  : "PUT",
      headers,
      body : JSON.stringify(data) 
    })
    const result   = await response.json()
    console.log(result)
    return result 
  }catch(error){
           console.log(error)
  }
})


const userSlice  =createSlice({
  name : "users",
   initialState : {
    formData : {
        name : "",
        email : "",
        gender: "male",
        status:"inactive"
    } ,
    usersInfo : [],
     updateKey : null

   },
   reducers : {
    resetForm : (state)=>{
        state.formData  = {name : "", email : "", gender:"male", status : "active"}
    },
    updateForm : (state, action)=>{
        state.formData = {...state.formData, ...action.payload}
    },
    setUpdatekey : (state, action)=>{
      state.updateKey = action.payload
    }
   },   extraReducers : (builder)=>{
         builder.addCase(fetchingUsers.fulfilled , (state, action)=>{
            state.usersInfo   = action.payload
         }).addCase(addingUser.fulfilled , (state, action)=>{
              state.usersInfo.push(action.payload)
         }) .addCase(deleteUser.fulfilled , (state, action)=>{
             state.usersInfo = state.usersInfo.filter((user)=>user.id !== action.payload)
         }).addCase(updateUser.fulfilled , (state, action)=>{
              state.usersInfo = state.usersInfo.map((user)=>user.id === action.payload.id ? action.payload : user) 
         } )

   }



})




export const {resetForm, updateForm,setUpdatekey} = userSlice.actions
export default userSlice.reducer










