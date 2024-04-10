import {
    DRAGON_ADD,
    DRAGON_DELETE,
    DRAGON_SET_ERROR,
    DRAGON_SET_UNAVAILABLE,
    DRAGON_SET_VALUE
} from "../constant/action-type.js";

const initialState = {
    name: '',
    dragons: [
        {
            id: 1,
            name: 'Balla',
            available: true
        },
        {
            id: 2,
            name: 'Dard',
            available: true
        }
    ],
    id: 3,
    error: ''
}

const dragonReducer = (state = initialState, action) => {
    switch (action.type) {

        case DRAGON_SET_VALUE:
            return {
                ...state,
                name: action.payload,
                error: ''
            }

        case DRAGON_ADD:
            return {
                ...state,
                dragons: [...state.dragons, {id: state.id, name: state.name.trim(), available: true}],
                name: '',
                id: state.id + 1,
                error: ''
            }

        case DRAGON_SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case DRAGON_DELETE:
            return {
                ...state,
                dragons: state.dragons.filter((dragon) => dragon.id !== action.payload)
            }

        case DRAGON_SET_UNAVAILABLE:
            return {
                ...state,
                dragons: state.dragons.map((dragon) => dragon.id === action.payload.id ? {...dragon, available: false} : dragon)
            }
        default:
            return state;
    }
}

export default dragonReducer;