import React from 'react';
import {useGameContext} from "../context/gameContext.jsx";

const Stats = () => {

    const {state} = useGameContext()


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Nombre de lancé</td>
                        <td>Nombre de triple 6</td>
                        <td>Pourcentage de triple 6</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{state.nbLaunch}</td>
                        <td>{state.triple}</td>
                        <td>{(state.triple / state.nbLaunch) * 100}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Stats;