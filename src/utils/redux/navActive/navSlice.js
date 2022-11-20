import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
    name : "nav",
    initialState : {
        value : "Home"
    },
    reducers : {
        changeActive : (state,action) => {
            state.value = action.payload
        }
    }
})

export const {changeActive} = navSlice.actions
export default navSlice.reducer