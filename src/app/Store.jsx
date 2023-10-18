import {configureStore} from '@reduxjs/toolkit'

import AddToCart from '../feature/AddToCart'
export default configureStore({
    reducer:{
      
        Cart:AddToCart,
    }
})