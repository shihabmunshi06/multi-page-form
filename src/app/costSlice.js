import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cost: 0,
}
const costSlice = createSlice({
    name: "cost",
    initialState,
    reducers: {
        addCost: (state, action) => {
            state.cost += action.payload
        },
        removeCost: (state, action) => {
            state.cost -= action.payload
        },
        resetCost: (state) => {
            state.cost = 0
        },
    }
})

export default costSlice.reducer
export const { addCost, removeCost, resetCost } = costSlice.actions