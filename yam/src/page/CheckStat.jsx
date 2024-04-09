import React from 'react';
import {useGameContext} from "../context/gameContext.jsx";
import Stats from "./Stats.jsx";
import NoStats from "../component/NoStats.jsx";

const CheckStat = () => {

    const {state} = useGameContext()

    return (
        state.nbLaunch !== 0 ?
            <Stats /> : <NoStats />
    );
};

export default CheckStat;