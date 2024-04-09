
const initialState = {
    name: '',
    dragons: [],
    id: 1,
    error: ''
}

const dragonReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'DRAGON/SET_VALUE':
            return {
                ...state,
                name: action.payload,
                error: ''
            }

        case 'DRAGON/ADD':
            return {
                ...state,
                dragons: [...state.dragons, {id: state.id, name: state.name}],
                name: '',
                id: state.id + 1,
                error: ''
            }

        case "DRAGON/SET_ERROR":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default dragonReducer;