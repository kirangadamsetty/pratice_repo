import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
 
const BASE_URL = "https://gorest.co.in/public/v2/users"
const TOKEN = "221f55519d6804d85dad5824be750b54e3de0313d2a5e7c1ffcabc8e6fa8b517"

export const fetchingData = createAsyncThunk("users/fetchingData", async()=>{
    const response = await fetch(BASE_URL, {
        method : "GET"
    })
    if(!response.ok) throw new Error("Failed to Fetch") 
    return await response.json()
})


export const deleteUser = createAsyncThunk("users/deleteUser", async(data)=>{
        const response = await fetch(BASE_URL + `/${data.id}`, {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json",
                Accept : "application/json",
                Authorization: `Bearer ${TOKEN}`
            },
            body : JSON.stringify()
        })
        if(response.status === 204) return data.id
})

export const updatingUser  = createAsyncThunk("users/updatingUser", async({ key, data }) => {
    const response = await fetch(BASE_URL + `/${key}`, {
        method : "PUT",
        headers : {
            "Content-Type" :"application/json",
            Accept : "application/json",
            Authorization : `Bearer ${TOKEN}` 
        },
        body : JSON.stringify(data)
    }) 
    const result = await response.json()
    return result
})

export const addingUser = createAsyncThunk("users/addingUser" ,async(data)=>{
    const response = await fetch(BASE_URL, {
        method : "POST",
        headers : {
            "Content-Type" :"application/json",
            Accept : "application/json",
            Authorization  : `Bearer ${TOKEN}`
        },
        body : JSON.stringify(data)

    })
    if(!response.ok)  throw new Error("Failed to add data") 
    let result = await response.json()

    return result

})
const UserSlice  = createSlice({
    name : "users",
    initialState : {
        formData : {
            name : "",
            email : "",
            gender : "male",
            status : "active"
        }, 
        usersData : [],
        updateKey : null
    },
    reducers : {
        setFormData : (state, action) =>{
            state.formData = action.payload
        },
        setUpdateKey : (state, action) =>{
            state.updateKey = action.payload
        },
        resetFormData : (state, action) =>{
            state.formData  = action.payload
        }
    },
    extraReducers : (builder) =>{
        builder
        .addCase(fetchingData.fulfilled, (state, action)=>{
             state.usersData = action.payload
        })
        .addCase(deleteUser.fulfilled, (state, action)=>{
             let index  = state.usersData.findIndex((item)=> item.id === action.payload)
             state.usersData.splice(index, 1)
        }).addCase(addingUser.fulfilled , (state, action)=>{
            state.usersData.push(action.payload)
        }).addCase(updatingUser.fulfilled, (state, action) => {
      const index = state.usersData.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.usersData[index] = action.payload;
      }
    });
    }
     


})


export const {setFormData, setUpdateKey, resetFormData} = UserSlice.actions
export default UserSlice.reducer



































