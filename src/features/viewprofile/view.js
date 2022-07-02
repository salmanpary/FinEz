import { createSlice } from "@reduxjs/toolkit";
const initialState={
    "coin_price_json":{},
    "invested_amount":0,
    "name":" ",
    "sum_percentage":" ",
    "total_amount":" "
}
const viewSlice=createSlice({
    name:"viewprofile",
    initialState,
    reducers:{
        storeview:(state,action)=>{
            state.coin_price_json=action.payload.coin_price_json;
            state.invested_amount=action.payload.invested_amount;
            state.name=action.payload.name;
            state.sum_percentage=action.payload.sum_percentage;
            state.total_amount=action.payload.total_amount;
        }
    }
})
export {viewSlice}
export const {storeview}=viewSlice.actions
export default viewSlice.reducer