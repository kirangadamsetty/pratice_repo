import {createSlice} from "@reduxjs/toolkit"

const ProductSlice = createSlice({
    name  : "productCards",
    initialState :[
        {id : "product-1", offers : true, name : "mens-shirts"},
        {id : "product-2", offers : true, name : "womens-shirts"},
        {id : "product-3", offers : false, name : "kids-shirts"},
    ],
    reducers : {
        deleteProduct : (state, data) =>{
            return state.filter((li)=>li.id !== data.payload.id)
        }
    }
})

export const {deleteProduct} = ProductSlice.actions
export default ProductSlice.reducer



