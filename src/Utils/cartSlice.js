import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearItem:(state,action)=>{
            state.items=[]
        },
        deleteItem:(state,acton)=>{
            state.items.pop()
        }
    }
})
// console.log(cartSlice.getInitialState())
export const {addItem,clearItem,deleteItem}= cartSlice.actions;
export default cartSlice.reducer;