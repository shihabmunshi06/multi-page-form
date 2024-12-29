import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const addOnsSlice = createSlice({
    name: "addOns",
    initialState,
    reducers: {
        addAddOns: (state, action) => {
            state.push(action.payload)
        },
        removeAddOns: (state, action) => {
            state = state.filter(e => e.addOnsName != action.payload)
        },
        resetAddOns: (state) => {
            state.addOns = []
        }
    }
})

export default addOnsSlice.reducer

export const { addAddOns, removeAddOns, resetAddOns } = addOnsSlice.actions