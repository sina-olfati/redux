import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";

// Middleware
import { applyMiddleware } from "redux";
import logger from "redux-logger";

// Redux DevTools
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store