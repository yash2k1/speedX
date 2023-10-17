// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// export const fechData=createAsyncThunk("fechData",async()=>{
//      const baseUrl = "http://localhost:3030/";
//     let res= await fetch(baseUrl)
//     return res.json();
   
// })
// const ApiSlice=createSlice({
// name:"ApiSlice",
// initialState:{
// isLoading:true,
// data:null,
// isError:false,
// },
// extraReducers:(builder)=>{
//     builder.addCase(fechData.pending,(state)=>{
//         state.isLoading=true;
//        console.log("state1")

//     })
//     builder.addCase(fechData.fulfilled,(state,action)=>{
//        state.isLoading=false;
//        state.data=action.payload;
//        console.log("state2")
//     })
//     builder.addCase(fechData.rejected,(state)=>{
//         state.isError=true;
//        state.isLoading=false;
//        console.log("state3")

//     })
    
// }
// })
// export default ApiSlice.reducer;