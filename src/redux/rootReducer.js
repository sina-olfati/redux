import { combineReducers } from "redux";

import reducer from "./counter/counterReducer";
import reducer2 from "./counter2/counter2Reducer";
import userReducer from "./users/usersReducer";

const rootReducer = combineReducers({
    counterState: reducer,
    counter2State: reducer2,
    userState: userReducer
})

export default rootReducer
