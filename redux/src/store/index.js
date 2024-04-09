import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import shopReducer from "./reducer/shopReducer.js";
import taskReducer from "./reducer/taskReducer.js";


const logMiddleware = (store) => (next) => (action) => {
    console.log({
        message: 'Im the middleware',
        action
    })
    if (action.type !== 'SHOP/COUNT') {
        store.dispatch({
            type: 'SHOP/COUNT'
        })
    }
    next(action)
}

//Equivalent à la notation au-dessus
// function middleware(store) {
//     return function(next) {
//         return function(action){
//
//         }
//     }
// }

const store = createStore(
    combineReducers({
        shop: shopReducer,
        tasks: taskReducer
    }),
    {
        shop: {
            shopList: [],
            count: 0
        },
        tasks: {
            tasks: []
        }
    },
    applyMiddleware(
        logMiddleware,

    ),

)



store.subscribe(() => console.log(store.getState()))

export default store;