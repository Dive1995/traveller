import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trips: [
        {
            day: 1,
            color: '#20a4f3',
            date: "2nd, September 2023",
            totalExpense: 500,
            itenary: []
          },
            {
            day: 2,
            color: '#ff686b',
            date: "3rd, September 2023",
            totalExpense: 1200,
            itenary: []
          },
            {
            day: 3,
            color: '#ff8c42',
            date: "4th, September 2023",
            totalExpense: 800,
            itenary: []
          }
    ],
    places:[],
    todos:[],
    notes:[],
    selectedDay: 1
} 

//TODO: map shouldn't be re-rendered when todo/notes is added, it should only re-render for new places / any other map ineraction

const tripSlice = createSlice({
    name: 'trips',
    initialState,
    reducers:{
        // add the searched places to the current day
        addNewPlaceToTimeLine(state, action){
          state.places.push(action.payload);
        },
        addNewTodoToTimeLine(state, action){
          state.todos.push(action.payload);
        },
        addNewNoteToTimeLine(state, action){
          state.notes.push(action.payload);
        },
        addIdToItenary(state, action){
          state.trips.map(trip => {
            if(trip.day === action.payload.day){
              trip.itenary.push(action.payload.data);
            }
            return trip;
          });
        },
        updateDayTimeLine(state, action){
          state.trips.map(trip => {
            if(trip.day === state.selectedDay){
              trip.itenary = action.payload;
            }
            return trip;
          })
        }
    }
})

export const { addNewPlaceToTimeLine, addNewTodoToTimeLine, addNewNoteToTimeLine, addIdToItenary, updateDayTimeLine } = tripSlice.actions;
export default tripSlice.reducer;