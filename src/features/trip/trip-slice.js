import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trips: [
        {
            day: 1,
            date: "2nd, September 2023",
            totalExpense: 500,
            itenary: [
              // {
              //   type: 'place',
              //   cordinates: {lat:40, lng: 80}
              // },
              // {
              //   type: 'place',
              //   cordinates: {lat:20, lng: 80}
              // }
            ]
          },
            {
            day: 2,
            date: "3rd, September 2023",
            totalExpense: 1200,
            itenary: [
              // {
              //   type: 'place',
              //   cordinates: {lat:140, lng: 180}
              // }
            ]
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
            state.trips.map(trip => {
              if(trip.day === state.selectedDay){
                trip.itenary.push(action.payload);
              }
              return trip;
            });
        },
        //TODO: remove note and todo methods since the data is coming from the payload that matters
        newNote(state, action){
          state.trips.map(trip => {
            if(trip.day === state.selectedDay){
              trip.itenary.push(action.payload);
            }
            return trip;
          });
        },
        newTodo(state, action){
          state.trips.map(trip => {
            if(trip.day === state.selectedDay){
              trip.itenary.push(action.payload);
            }
            return trip;
          });
        }
    }
})

export const { addPlace, newTodo, newNote } = tripSlice.actions;
export default tripSlice.reducer;