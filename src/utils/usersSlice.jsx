import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const url = "https://gorest.co.in/public/v2/users"
const token  = "221f55519d6804d85dad5824be750b54e3de0313d2a5e7c1ffcabc8e6fa8b517"
const headers = {
    "Content-Type" :"application/json", 
    Accept : "application/json",
    Authorization : `Bearer ${token}`

}

export const fetchUsers = createAsyncThunk("users/fetchUser",  async()=>{
    try{
    const response = await fetch(url,{
        method : "GET", 
        headers,

    })
    if(!response.ok) throw new Error("!failed to fetch Data")
    const result = await response.json()
    return result
    }catch(error){
    console.log(error)
    }
   
   
})
export const updateUser = createAsyncThunk("users/updateUser", async(user)=>{
    const response = await fetch(url + `/${user.id}`, {
        method : "PUT",
        headers, 
        body : JSON.stringify(user)
    })
    const result = await response.json()
    return result
})
export const deleteUser = createAsyncThunk("users/deleteUser", async(user)=>{
    const response = await fetch(url + `/${user.id}`,{
        method : "DELETE", 
        headers ,

    })
    if(!response.ok) throw new Error("unable to delete user")
return user.id
})
export const addUser = createAsyncThunk("users/addUser" , async(data)=>{
  const response = await fetch(url, {
    method : "POST", 
    headers, 
    body : JSON.stringify(data)
  })

  if(!response.ok) throw new Error("failed to add User")
  const result = await response.json()
return result
})

const userSlice = createSlice({
    name : "users",
    initialState : {
        formData : {
        name : "",
        email : "",
        gender : "male",
        status : "active"
    },
    usersInfo : [],
    updateKey : null
    },
     reducers : {
        resetForm : (state) =>{
            state.formData({
              
        name : "",
        email : "",
        gender : "male",
        status : "active"
            })
        },
        setFormData : (state, action) =>{
          state.formData = action.payload
        },
        setUpdateKey : (state, action) =>{
            state.updateKey = action.payload
        }
     },
     extraReducers : (builder)=>{
        builder
        .addCase(fetchUsers.fulfilled, (state, action)=>{
           state.usersInfo = action.payload
        }).addCase(addUser.fulfilled, (state,action)=>{
             state.usersInfo.push(action.payload)

        }).addCase(deleteUser.fulfilled, (state, action)=>{
             state.usersInfo = state.usersInfo.filter((user)=>user.id !== action.payload)
             
        }).addCase(updateUser.fulfilled, (state, action) =>{
            state.usersInfo = state.usersInfo.map((user)=>user.id === action.payload.id ? action.payload : user)
        })
     }
})



export const {resetForm,setFormData, setUpdateKey} = userSlice.actions
export default userSlice.reducer













