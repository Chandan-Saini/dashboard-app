import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Pages/auth.slice";

export default configureStore({
    reducer: {
        auth: authReducer
    }
})
