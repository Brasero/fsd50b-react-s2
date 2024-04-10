import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import knightReducer from "./reducer/knightReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";
import coupleReducer from "./reducer/coupleReducer.js";
import coupleMiddleware from "./middleware/coupleMiddleware.js";

const store = createStore(
    combineReducers({
        dragonReducer: dragonReducer,
        knightReducer: knightReducer,
        coupleReducer: coupleReducer
    }),
    composeWithDevTools(
        applyMiddleware(
            coupleMiddleware,
        )
    )
)


export default store