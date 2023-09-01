import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./features/trip/trip-slice"

export const store = configureStore({
    reducer: {
        trips: tripReducer
    }
});
