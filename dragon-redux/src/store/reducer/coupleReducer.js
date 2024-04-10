import {COUPLE_ADD} from "../constant/action-type.js";

const initialState = {
    couple: [],
    id: 1
}

const coupleReducer = (state = initialState, action) => {
    switch(action.type) {

        case COUPLE_ADD:
            return {
                ...state,
                couple: [...state.couple, {...action.payload, id: state.id}],
                id: state.id + 1
            }

        default:
            return state
    }
}

export default coupleReducer