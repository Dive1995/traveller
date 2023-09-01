import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: [
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
    ]
}

// value: {
//     selectedDay: 2,
//     details: [
//         {
//             day: 1,
//             date: "2nd, September 2023",
//             totalExpense: 500,
//             itenary: []
//           },
//             {
//             day: 2,
//             date: "3rd, September 2023",
//             totalExpense: 1200,
//             itenary: []
//           },
//             {
//             day: 3,
//             date: "4th, September 2023",
//             totalExpense: 800,
//             itenary: []
//           }
//     ]       

const tripSlice = createSlice({
    name: 'trips',
    initialState,
    reducers:{
        addPlace(state, action){
            return 
        }
    }
})

export const { addPlace } = tripSlice.actions;
export default tripSlice.reducer;