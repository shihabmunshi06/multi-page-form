export const addInfo = (key, value) => {
    return {
        type: "addInfo",
        payload: {
            key: key,
            value: value
        }
    }
}