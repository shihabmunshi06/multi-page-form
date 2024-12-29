import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userName: "",
    email: "",
    number: ""
}

const personalInfoSlice = createSlice({
    name: "personalInfo",
    initialState,
    reducers: {
        setPersonalInfo: (state, action) => {
            state = action.payload
        }
    }
})

export default personalInfoSlice.reducer

export const { setPersonalInfo } = personalInfoSlice.actions