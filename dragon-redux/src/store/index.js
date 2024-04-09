import {legacy_createStore as createStore} from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    dragonReducer,
    composeWithDevTools()
)

export default store