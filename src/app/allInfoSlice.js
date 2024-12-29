import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    personalInfo: {
        userName: "",
        email: "",
        number: ""
    },
    selectedPlan: {
        mode: "arcade",
        monthlyMoney: 9,
        yearlyMoney: 90,
        duration: "monthly",

    },
    addOns: [],
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
        setDuration: (state, action) => {
            state.selectedPlan.duration = action.payload
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
export const { addpersonalInfo, addSelectPlan, setDuration, addAddOns, removeAddOns, resetAddOns } = allInfoSlice.actions