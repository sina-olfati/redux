import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";

// Middleware
import { applyMiddleware } from "redux";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger))

export default store