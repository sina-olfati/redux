const initialState2 = {
    counter2: 10
}

const reducer2 = (state=initialState2, action) => {
    switch(action.type) {
        case "INCREASE2":
            return {
                ...state,
                counter2: state.counter2 + 1
            }
        case "DECREASE2":
            return {
                ...state,
                counter2: state.counter2 - 1
            }
        default:
            return state
    }
}


export default reducer2