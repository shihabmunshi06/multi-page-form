let initialState = {
    personalInfo: {
        name: "",
        email: "",
        number: ""
    },
    selectPlan: {
        mode: "arcade",
        duration: "monthly"
    },
    addOns: "",
    summary: ""
}

let allInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addInfo":
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }
        default:
            return state
    }
}

export default allInfoReducer