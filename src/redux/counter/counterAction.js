const increase = (value) => {
    return {type: "INCREASE", payload: value}
}

const decrease = (value) => {
    return {type: "DECREASE", payload: value}
}

export {increase, decrease}