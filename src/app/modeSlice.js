import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mode: "arcade",
    monthlyMoney: 9,
    yearlyMoney: 90,
    duration: "monthly",
}

const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state = action.payload
        },
        setDuration: (state, action) => {
            state.duration = action.payload
        },
    }
})

export default modeSlice.reducer

export const { setMode, setDuration } = modeSlice.actions