import { configureStore } from "@reduxjs/toolkit";
import jumiaReducer from "@/redux/jumiaSlice";

export const store = configureStore({
    reducer: {
        jumia: jumiaReducer,
    },
});