import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    personalInfo: {
        userName: "",
        email: "",
        number: ""
    },
    selectedPlan: {
        mode: "arcade",
        duration: "monthly",
        moneyText: ""
    },
    addOns: [],
    summary: ""
}

const allInfoSlice = createSlice({
    name: "allInfo",
    initialState,
    reducers: {
        addpersonalInfo: (state, action) => {
            state.personalInfo = action.payload
        },
        addSelectPlan: (state, action) => {
            state.selectedPlan = action.payload
        },
        addAddOns: (state, action) => {
            state.addOns.push(action.payload)
        },
        removeAddOns: (state, action) => {
            state.addOns = state.addOns.filter(e => e.addOnsName != action.payload)
        },
        resetAddOns: (state) => {
            state.addOns = []
        }
    }
})

export default allInfoSlice.reducer;
export const { addpersonalInfo, addSelectPlan, addAddOns, removeAddOns, resetAddOns } = allInfoSlice.actions