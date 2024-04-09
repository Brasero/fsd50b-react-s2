import {createContext, useContext} from "react";
import useGameReducer from "../reducer/gameReducer.jsx";

const gameContext = createContext()

export const useGameContext = () => useContext(gameContext)

const GameContextProvider = ({children}) => {

    const [state, dispatch] = useGameReducer()

    return <gameContext.Provider value={{state, dispatch}}>
        {children}
    </gameContext.Provider>
}

export default GameContextProvider