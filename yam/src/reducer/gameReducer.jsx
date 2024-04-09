import {useReducer} from "react";


const initialState = {
    triple: 0,
    nbLaunch: 0
}

const gameReducer = (state, action) => {
    switch(action.type) {

        case "LAUNCH":
            return {
                ...state,
                triple: game(action.payload),
                nbLaunch: action.payload
            }


        default:
            return state;
    }
}

const game = (num) => {
    const de = () => Math.floor(Math.random() * 6) + 1

    let result = 0;

    for (let i = 0; i < num; i++) {
        const launch = [de(), de(), de()];

        if (launch.reduce((acc, curr) => acc + curr, 0) === 18) result++;
    }
    return result;
}

const useGameReducer = () => useReducer(gameReducer, initialState)

export default useGameReducer