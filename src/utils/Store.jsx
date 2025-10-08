import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.jsx"

const store = configureStore({
   reducer:{
     users  : userReducer 
   }
})
export default store




















