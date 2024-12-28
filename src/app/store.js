import { configureStore } from "@reduxjs/toolkit"

import allInfoReducer from "./allInfoSlice"
import costReducer from "./costSlice"

const store = configureStore({
    reducer: {
        allInfo: allInfoReducer,
        cost: costReducer
    }
})

export default store