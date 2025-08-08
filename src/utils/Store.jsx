import {configureStore} from "@reduxjs/toolkit"
import usersReducer from "./usersSlice.jsx"

const store = configureStore({
   reducer : {
    users : usersReducer
   }
})

export default store















