import {COUPLE_ADD} from "../constant/action-type.js";
import {setDragonUnavailable, setKnightUnavailable} from "../action/index.js";

const coupleMiddleware = (store) => (next) => (action) => {
    if (action.type === COUPLE_ADD) {
        const {dragon, knight} = action.payload
        action.payload.knight = {...action.payload.knight, available: false}
        action.payload.dragon = {...action.payload.dragon, available: false}
        store.dispatch(setDragonUnavailable(dragon))
        store.dispatch(setKnightUnavailable(knight))
    }
    next(action)
}

export default coupleMiddleware;