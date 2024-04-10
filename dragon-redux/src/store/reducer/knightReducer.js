import {
    KNIGHT_ADD,
    KNIGHT_DELETE,
    KNIGHT_SET_ERROR,
    KNIGHT_SET_UNAVAILABLE,
    KNIGHT_SET_VALUE
} from "../constant/action-type.js";

const initialState = {
    newKnight: {
        name: '',
        age: ''
    },
    knights: [
        {
            name: 'Dardagnan',
            age: 45,
            id: 1,
            available: true
        }
    ],
    id: 2,
    error: ''
}

const knightReducer = (state = initialState, action) => {
    switch(action.type) {

        case KNIGHT_SET_VALUE:
            return {
                ...state,
                newKnight: {
                    ...state.newKnight,
                    [action.payload.name]: action.payload.value
                },
                error: ''
            }

        case KNIGHT_ADD:
            return {
                ...state,
                knights: [...state.knights, {id: state.id, name: state.newKnight.name.trim(), age: parseInt(state.newKnight.age), available: true}],
                error: '',
                id: state.id + 1,
                newKnight: {
                    name: "",
                    age: ""
                }
            }

        case KNIGHT_DELETE:
            return {
                ...state,
                knights: state.knights.filter(knight => knight.id !== action.payload)
            }

        case KNIGHT_SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case KNIGHT_SET_UNAVAILABLE:
            return {
                ...state,
                knights: state.knights.map(knight => knight.id === action.payload.id ? {...knight, available: false} : knight)
            }

        default:
            return state;
    }
}

export default knightReducer