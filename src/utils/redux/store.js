import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navActive/navSlice"

export default configureStore({
    reducer : {
        navActive : navReducer
    }
})