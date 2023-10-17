import { createSlice } from "@reduxjs/toolkit";

const AddtoCart=createSlice({
    name:"addToCart",
    initialState:{
        cartData:0
    },
    reducers:{
        addItem:(state,{payload})=>{
            if(payload<=0) state.cartData=0;
            else state.cartData=payload;
        }
    }
})
export default AddtoCart.reducer;
export const {addItem} =AddtoCart.actions;