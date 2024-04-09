
const initialState = {
    tasks: []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'TASK/ADD':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }


        default:
            return state;
    }
}

export default taskReducer