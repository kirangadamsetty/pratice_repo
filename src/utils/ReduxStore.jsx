import {configureStore} from "@reduxjs/toolkit"
import CounterSlice from "./CounterSlice.jsx"
import ProductSlice from "./ProductSlice"
import FashionProductsSlice from "./FashionProductsSlice.jsx"
import UserSlice from "./UserSlice.jsx"
const ReduxStore = configureStore({
      reducer:{
        counter : CounterSlice,
        productCards : ProductSlice,
        fashionProducts : FashionProductsSlice,
        users : UserSlice
      }
})


export default ReduxStore





