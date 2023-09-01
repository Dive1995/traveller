import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trips: [
        {
            day: 1,
            date: "2nd, September 2023",
            totalExpense: 500,
            itenary: []
          },
            {
            day: 2,
            date: "3rd, September 2023",
            totalExpense: 1200,
            itenary: []
          },
            {
            day: 3,
            date: "4th, September 2023",
            totalExpense: 800,
            itenary: []
          }
    ],
    selectedDay: 1
} 

//TODO: map shouldn't be re-rendered when todo/notes is added, it should only re-render for new places / any other map ineraction

const tripSlice = createSlice({
    name: 'trips',
    initialState,
    reducers:{
        // add the searched places to the current day
        addPlace(state, action){
            console.log(action.payload)
            state.trips.map(trip => {
              if(trip.day === state.selectedDay){
                trip.itenary.push(action.payload);
              }
              return trip;
            });
        }
    }
})

export const { addPlace } = tripSlice.actions;
export default tripSlice.reducer;