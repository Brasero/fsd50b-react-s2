import {configureStore} from "@reduxjs/toolkit";
import taskSlice from "./Slice/taskSlice.js";
import apiStatusMiddleware from "./middleware/apiStatusMiddleware.js";
import apiStatusSlice from "./Slice/apiStatusSlice.jsx";

const store = configureStore({
    reducer: {
        tasks: taskSlice,
        apiStatus: apiStatusSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        apiStatusMiddleware
    ])
})

export default store