import {createSlice} from "@reduxjs/toolkit"

const FashionProductsSlice = createSlice({
    name : "fashionProducts",
    initialState : Array.from({length : 100}, (_, id) =>{
        return {
            id : id, 
            name : `product-${id}`,
            offers : id%2 === 0 ? true : false
        }     
    }),
    reducers : {
        deleting : (state, data) =>{
            return state.filter((item) => item.id !== data.id)      
        }
    }

})

export const {deleting} = FashionProductsSlice.actions
export default FashionProductsSlice.reducer


