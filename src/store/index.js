import { configureStore } from "@reduxjs/toolkit";

import userPostReducer from "./userPostSlice"


export default configureStore ({
    reducer:{
        userPostReducer
    }
})