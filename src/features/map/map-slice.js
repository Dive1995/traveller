import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cordinates: {lat:43, lng: -80}
}

const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        // update cordinates when new place is added - this will re-render the map and center the new location.
        setCordinates(state, action){
            state.cordinates = action.payload;
        }
    }
})

export default mapSlice.reducer;
export const { setCordinates } = mapSlice.actions;