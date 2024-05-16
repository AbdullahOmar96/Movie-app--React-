import {configureStore} from "@reduxjs/toolkit"

import watchListSlice from "../store/slice/WatchList"

export const store = configureStore({
    reducer: {
        movie: watchListSlice
    }

})