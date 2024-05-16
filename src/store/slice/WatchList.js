import {createSlice} from "@reduxjs/toolkit"

export const watchListSlice = createSlice({
    name: "watchlist",
    initialState: {
        watchList: []
    },
    reducers: {
        addMovie: (state, action) => {

            if ( state.watchList.find((movie) => movie.id === action.payload.id) ) {
                alert("Already added")
            } else {
                state.watchList.push(action.payload)
            }
            
            // state.watchList.push(action.payload)
        },
        removeMovie: (state, action) => {

            state.watchList = state.watchList.filter((movie) => movie.id !== action.payload.id)
            
        }
    }
    
})

export const {addMovie, removeMovie} = watchListSlice.actions

export default watchListSlice.reducer

