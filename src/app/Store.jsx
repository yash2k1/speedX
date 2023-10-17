import {configureStore} from '@reduxjs/toolkit'
// import ApiSlice from '../feature/ApiSlice'
import AddToCart from '../feature/AddToCart'
export default configureStore({
    reducer:{
        // callApi:ApiSlice,
        Cart:AddToCart,
    }
})