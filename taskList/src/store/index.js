import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./Slice/counterSlice.js";

const store = configureStore({
    reducer: {
        counter: counterSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        //Middleware personnalisé
    ])
})

export default store