import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./features/trip/trip-slice"
import mapReducer from "./features/map/map-slice"

export const store = configureStore({
    reducer: {
        trips: tripReducer,
        map: mapReducer
    }
});
