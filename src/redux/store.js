import { legacy_createStore as createStore } from "redux";

import reducer from "./counter/counterReducer";

const store = createStore(reducer)

export default store